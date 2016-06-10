var Base = require('./base');

module.exports = Base.extend({
  url: '/my-playlists/:id',
  idAttribute: 'id',
   defaults: function(){
        return {
            content: "Note created on " + new Date().toISOString()
        }
    }
});
module.exports.id = 'my_playlist';