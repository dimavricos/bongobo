module.exports = {
	index: function(params, callback) {
		this.app.set('title', 'Playlists ');
		var spec = {
			collection: {collection: 'Playlists', params: params},

		};
		this.app.fetch(spec, function(err, result) {
       // We must check for an error before accessing `result.model` (below),
   // which may be undefined if there's an error (404, 500, etc.).
   if (err) return callback(err);

      // Because the page title depends on the Repo model, we wait to set it
      // until the fetch is complete.
      
      this.app.set('title', 'Playlists: ' + params.station + ' | Bongobo');

      callback(null, result);
  }.bind(this));
	}
};