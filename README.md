# detecter (not supported yet)
web alteration Detecter

##Installation
```npm install detecter```

## Simple to use
```js
var detecter = require('detecter');

var option = {
      url: "http://boards.4chan.org/c/",
      element: "a.fileThumb img",
      path: "~/Desktop"
}

detecter.start(option, function(data, err){
      if(err) throw err;
      data.download();
}
```

### Response Example

<b>success</b>
```json
{
      "url": "http://boards.4chan.org/c/",
      "path": "~/Desktop",
      "Status": 200,
      "time: "08:24"
      "success": true
}
```

##LICENSE
The MIT License [(MIT)](https://github.com/imkimchi/muload/blob/master/LICENSE)
Copyright (c) 2016 Philip Yoonshin
