module.exports = {
  index: function(params, callback) {

    var spec = {

      playlists : {collection: 'Playlists', params: {station : 'top 100 music'}},
      artists : {collection: 'artists' },	
    
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  },

  
};