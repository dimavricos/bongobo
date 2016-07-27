
var Playlist = require('../models/playlist')
  , Base = require('./base');

module.exports = Base.extend({
  model: Playlist,
  url: function(){
  	return "/youtube/v3/search?part=snippet&maxResults=50&q="+this.params.station+"&type=playlist&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ"
  } ,
  parse: function(response) {  
  	 
                        return response.items;
                    },
                    
});
module.exports.id = 'Playlists';