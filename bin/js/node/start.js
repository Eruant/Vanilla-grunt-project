/*! playground 03-06-2013 */
var http=require("http"),url=require("url"),path=require("path"),fs=require("fs"),port=process.env.PORT||5e3;http.createServer(function(a,b){"use strict";var c=url.parse(a.url).pathname,d="bin/"+path.join(process.cwd(),c);console.log("Filename: "+d),path.exists(d,function(a){return a?(fs.statSync(d).isDirectory()&&(d+="index.html"),fs.readFile(d,"binary",function(a,c){return a?(b.writeHead(500,{"Content-Type":"text/plain"}),b.write(a+"\n"),b.end(),void 0):(b.writeHead(200),b.write(c,"binary"),b.end(),void 0)}),void 0):(b.writeHead(404,{"Content-Type":"text/plain"}),b.write("404 Not Found\n"),b.end(),void 0)})}).listen(parseInt(port,10)),console.log("Static file server running at \n => http://localhost:"+port+"\nCTRL + C to shutdown");
//# sourceMappingURL=../bin/js/source-map.js
