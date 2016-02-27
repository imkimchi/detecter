"use strict"

var request = require('request'),
 	cheerio = require('cheerio');
 	
var muload = function(url, element, path){
	request(url, function(error, response, html){
		let $ = cheerio.load(html);
		$(element).each();
		// write stream 
	})
}
