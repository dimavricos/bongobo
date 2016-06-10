module.exports = {
	index: function(params, callback) {

		var spec = {
			playlist_details :{collection : 'playlist_details' , params:  params},
			selected_playlist : {collection: 'Tracks', params: params},
			related_playlists : {collection: 'Playlists', params:  params},
			
			
		};
		this.app.fetch(spec, function(err, result) {
			console.log("AAAAAA" , result)
			callback(err, result);
		});

	},

	
};