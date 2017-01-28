//NOT USED ANY MORE

var artist = require('../models/artist')
, Base = require('./base');

module.exports = Base.extend({
	model: artist,
	api: 'artists',
	url: function(){
		return "/?method=chart.gettopartists&api_key=835e8e10f26a51713d1bf8fbe4565d62&format=json"
	} ,
	parse: function(response) {   
		return response.artists.artist
	},
	  


});
module.exports.id = 'artists';