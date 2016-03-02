# imgcrawl (not supported yet)
crawl image as a current web site

##Installation
```npm install imgcrawl```

## Simple to use
```js
var crawler = require('imgcrawl');

var option = {
      url: "http://boards.4chan.org/c/",
      element: "a.fileThumb img",
      path: "~/Desktop"
}

crawler.start(option, function(data, err){
  if(callBack.success){
    console.log("image has been downloaded from %s", callBack.url);
  } else {
    console.log("image download failed [%s]", callBack.status);
  }
}
```

##LICENSE
The MIT License [(MIT)](https://github.com/imkimchi/muload/blob/master/LICENSE)
Copyright (c) 2016 Philip Yoonshin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
