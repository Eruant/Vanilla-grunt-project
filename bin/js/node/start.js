/*! playground 03-06-2013 */
var http=require("http"),fs=require("fs"),port=process.env.PORT||5e3;fs.readFile("bin/index.html",function(a,b){"use strict";if(a)throw a;http.createServer(function(a,c){c.writeHead(200,{"Content-Type":"text/html"}),c.write(b),c.end()}).listen(port)});
//# sourceMappingURL=../bin/js/source-map.js
