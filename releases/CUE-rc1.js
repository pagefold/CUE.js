/**  
 *   Cue.js
 *   Create and execute (in order) queues of Javascript(s) by file or block.
 *   Accepts a string representing a URL to a Javascript file or a function to execute.
 *   The queue is an enhanced array that runs and clears itself upon execution, by recursion.
 *   by Brandon McKinney <pagefold@gmail.com>
 *   https://github.com/pagefold/CUE.js
 */
(function(){
  window.CUE = function(){
    // Store a reference to document.head locally.
    var head = document.getElementsByTagName('head')[0];

    // Create a public Array to hold the queue.
    this.cue = [];

    this.push = function(){
      // Add the arguments to a stack if a string or function. Others are ignored.
      for (i in arguments) { if (/^(string|function)$/.test(typeof arguments[i]))  this.cue.push(arguments[i]); }
    };

    // Process the queue using recursion until the cue array is empty.
    this.go = function() {
      var that = this,
          js = this.cue.shift(),
          s = null;
      if (typeof js == 'string') {
          s = document.createElement('script');
          s.src = js;
          s.onload = function(){ that.go() };
          s.onreadystatechange = function(){ if (/^(complete|loaded)$/i.test(s.readyState)) that.go() };
          head.appendChild(s);
      } else if (typeof js == 'function') {
          js.call(window);
          this.go();
      }
      return this;
    };
    
    // Process anything passed in the initialization of the class.
    this.push.apply(this, arguments);
  };
})();
