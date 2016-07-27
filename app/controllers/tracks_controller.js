module.exports = {
	index: function(params, callback) {

		var spec = {
			playlist_details :{collection : 'playlist_details' , params:  params},
			selected_playlist : {collection: 'Tracks', params: params},
			related_playlists : {collection: 'Playlists', params:  params},
			
			
		};
		this.app.fetch(spec, function(err, result) {

			if (err) return callback(err);
			var str;
			var name = result.playlist_details.params.name
			if(typeof name !== "undefined"){
				 
				name = name.split('-').join(' '); 
			}else{
				name = "Bongobo | free internet radio with zero audio ads"
			}
			
			
			this.app.set('title',  name + ' Playlist | Bongobo');

//console.log('AAAAAAAAAAAAAAAAAAAAA' , result.selected_playlist.models[0.].attributes.snippet.thumbnails.high.url)
			this.app.set('og_image',   result.selected_playlist.models[0.].attributes.snippet.thumbnails.high.url );

			callback(null, result);
		}.bind(this));
	}
};