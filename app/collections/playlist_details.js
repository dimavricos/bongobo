
var PlaylistDetails = require('../models/playlist_details')
  , Base = require('./base');

module.exports = Base.extend({
  model: PlaylistDetails,
  url: function(){
  	return  "/youtube/v3/playlists?part=snippet&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ&id=" + this.params.playlistId
  } ,
  parse: function(response) {  
                        return response.items[0];
                    },
                    
});
module.exports.id = 'PlaylistDetails';