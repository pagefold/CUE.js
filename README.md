[CUE.js](https://github.com/pagefold/CUE.js)
===========================================
A minimal library for loading Javascripts and executing blocks of code in a specific order.


Usage Example
-------------
```javascript
var scriptList = new CUE('/js/jquery.js', '/js/jquery-ui.js');
scriptList.push('/js/swfobject.js');
scriptList.push(function(){
  // do something here
});
scriptList.go();
```

Tested Compatibility
--------------------
1. Chrome
2. Firefox 4+
3. IE 7+


TODO
----
1. Add todo list.


License
-------
The MIT License (MIT)
Copyright (c) 2012 Brandon McKinney

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
