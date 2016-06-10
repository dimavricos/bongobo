
var Track = require('../models/track')
  , Base = require('./base');

module.exports = Base.extend({
  model: Track,
  url: function(){ 
  	return  "/youtube/v3/playlistItems?part=snippet&maxResults=50&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ&playlistId=" + this.params.playlistId
  },

  parse: function(response) {  
                        return  response.items;
                    },
});
module.exports.id = 'Tracks';
