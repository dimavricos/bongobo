
var searchPlaylist = require('../models/search_playlist')
  , Base = require('./base');

module.exports = Base.extend({
  model: searchPlaylist,
  url: function(){
  	return "/youtube/v3/search?part=snippet&maxResults=50&q="+this.params.station+"&type=playlist&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ"
  } ,
  parse: function(response) { 
	console.log(response)
                        return response.items;
                    },
                    
});
module.exports.id = 'search_playlists';