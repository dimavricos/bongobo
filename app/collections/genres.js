var genre = require('../models/genre')
, Base = require('./base');

module.exports = Base.extend({
	model: genre,
	api: 'lastfm'  ,
	url: function(){
		return "/?method=chart.gettoptags&api_key=835e8e10f26a51713d1bf8fbe4565d62&format=json"
	} ,
	parse: function(response) {   
		return response.tags.tag
	},

});
module.exports.id = 'genres';