
var searchTrack = require('../models/search_track')
  , Base = require('./base');

module.exports = Base.extend({
  model: searchTrack,
  url: function(){
  	return "/youtube/v3/search?part=snippet&maxResults=50&type=video&videoCategoryId=10&videoDuration=any&order=viewCount&q="+this.params.value+"&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ"
  } ,
  parse: function(response) { 
	console.log(response)
                        return response.items;
                    },
                    
});
module.exports.id = 'search_tracks';