/*globals require, process */

var http = require('http'),
	fs = require('fs'),
	port = process.env.PORT || 5000;

fs.readFile('bin/index.html', function (err, html) {
	'use strict';
	
	if (err) {
		throw err;
	}
	http.createServer(function (req, res) {
	
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write(html);
		res.end();

	}).listen(port);

});