var artist = require('../models/artist')
, Base = require('./base');

module.exports = Base.extend({
	model: artist,
	url: function(){
		return "/ajax/services/feed/load?v=2.0&q=http://www.billboard.com/rss/charts/artist-100&num=15"
	} ,
	api: 'artists'  ,
	parse: function(response) { 
		var data = JSON.parse(response)

		return data.responseData.feed.entries;
	},

});
module.exports.id = 'artists';