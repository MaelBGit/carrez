var json = require('./leboncoin.json');
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){

  url = ' http://www.leboncoin.fr/ventes_immobilieres/915700197.htm?ca=12_s';
  
  request(url, function(error, response, html){
	if(!error){
		var $ = cheerio.load(html);
		var title, price, city, zipcode, goodstype, number_pieces, surface;
		
		title = $("[itemprop='name']").text();
		price =  $("[itemprop='price']").text();
		city =   $("[itemprop='addressLocality']").text();
		zipcode = $("[itemprop='postalCode']").text();
		var goods = $("[class = 'lbcParams criterias']>table > tr > td");
		goodstype = goods[0].children[0].data;
		number_pieces = goods[1].children[0].data;
		surface = goods[2].children[0].data;
		
		price = price.match(/[0-9,]/g).join("");
		surface = surface.match(/[0-9,]/g).join("");
		
		json.property.title = title;
		json.property.price = price;
		json.property.city = city;
		json.property.zipcode = zipcode;
		json.property.goodstype = goodstype;
		json.property.number_pieces = number_pieces;
		json.property.surface = surface;
	
	}

	fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

		console.log('File successfully written! - Check your project directory for the output.json file');

	});
	
	res.send('Check your console!');

});

});

app.listen('8081');

console.log('Magic happens on port 8081');
//exports = module.exports = app;