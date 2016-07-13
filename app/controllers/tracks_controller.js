module.exports = {
	index: function(params, callback) {

		var spec = {
			playlist_details :{collection : 'playlist_details' , params:  params},
			selected_playlist : {collection: 'Tracks', params: params},
			related_playlists : {collection: 'Playlists', params:  params},
			
			
		};
		this.app.fetch(spec, function(err, result) {

			if (err) return callback(err);

			var str = result.playlist_details.params.name
			var name = str.split('-').join(' '); 
			this.app.set('title',  name + ' | Bongobo');

			callback(null, result);
		}.bind(this));
	}
};