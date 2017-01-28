module.exports = {
  index: function(params, callback) {

    var spec = {

      playlists : {collection: 'Playlists', params: {station : 'top 100 music'}},
      genres : {collection: 'genres' , params: {route : '/'}},  
      lastfm_artists : {collection: 'lastfm_artists' },  
    
    };
    this.app.set('title', ' Free internet radio, music playlists with zero audio ads | Bongobo ');
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  },

  
};