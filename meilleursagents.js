var json = require('./meilleursagents.json');
var output = require('./output.json');
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

/*
app.get('/scrapema', function(req, res){

  url = "https://www.meilleursagents.com/prix-immobilier/" + output.property.city.toLowerCase() + "-" + output.property.zipcode +"/#estimates";
  
  request(url, function(error, response, html){
	if(!error){
		var $ = cheerio.load(html);
		var zipcode, average_flat_price, average_house_price, average_rent_price;
		
		zipcode = output.property.zipcode;
		var prices = $('.small-4.medium-2.columns.prices-summary__cell--median');
		average_flat_price = prices[0].children[0].data;
		average_house_price = prices[1].children[0].data;
		average_rent_price = prices[2].children[0].data;
		
		json.property.zipcode = zipcode;
		json.property.average_flat_price = average_flat_price;
		json.property.average_house_price = average_house_price;
		json.property.average_rent_price = average_rent_price;
	
	}

	fs.writeFile('ma.json', JSON.stringify(json, null, 4), function(err){

		console.log('File successfully written! - Check your project directory for the output.json file');

	});
	
	res.send('Check your console!');

});

});

app.listen('8082');

console.log('Magic happens on port 8082');*/

	var url = fs.readFileSync('./92200.html', 'utf8');
	
	var $ = cheerio.load(url);

	var zipcode, average_flat_price, average_house_price, average_rent_price;
		
		zipcode = output.property.zipcode;
		var prices = $('.small-4.medium-2.columns.prices-summary__cell--median');
					
		average_flat_price = prices[0].children[0].data;
		average_house_price = prices[1].children[0].data;
		average_rent_price = prices[2].children[0].data;
		
		
		json.property.zipcode = zipcode;
		json.property.average_flat_price = average_flat_price;
		json.property.average_house_price = average_house_price;
		json.property.average_rent_price = average_rent_price;
		
		fs.writeFile('ma.json', JSON.stringify(json, null, 4), function(err){

		console.log('File successfully written! - Check your project directory for the output.json file');

	});
	
	


