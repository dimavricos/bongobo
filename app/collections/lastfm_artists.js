var lastfm_artist = require('../models/lastfm_artist')
, Base = require('./base');

module.exports = Base.extend({
	model: lastfm_artist,
	api: 'lastfm'  ,
	url: function(){
		return "/?method=chart.gettopartists&api_key=835e8e10f26a51713d1bf8fbe4565d62&format=json"
	} ,
	parse: function(response) {   
		return response.artists.artist
	},

});
module.exports.id = 'lastfm_artists';