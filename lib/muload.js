"use strict"

var request = require('request'),
 	cheerio = require('cheerio'),
 	http = require('http');
 	fs = require('fs');
 	
exports.start = function(option){
	var Time = new Date();
/*
	function Callback(url, path, status, time, success){
		this.url = elem.attr('src');
		this.path = fs.createWriteStream(option.path);
		this.status = response.statusCode;
		this.success = success;
	}
	*/

	var callBack = {
		url: String,
		path: String,
		status: String,
		time: Time.getHours + Time.getMinutes(),
		success: boolean,
	}


	request(option.url, function(error, response, html){
		//엘리먼트 업데이트 캐치하는 핸들러 추가

		let $ = cheerio.load(html);
		$(option.element).each(function(){
			var url = $(this).attr('src');
			var file = fs.createWriteStream(option.path);
			var elem = $(this);

			request
				.get(url)
				.on('response', function(response){
					callBack = {
						url: elem.attr('src'),
						path: fs.createWriteStream(option.path),
						status: response.statusCode,
						success: true
					}
				})
				.on('error', function(err) {
					callBack = {
						status: response.statusCode,
						success: false
						}	
					})
				.pipe(file)

			return callBack;
		}
	)
})
