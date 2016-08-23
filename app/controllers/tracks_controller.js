module.exports = {
	index: function(params, callback) {

		var spec = {
			playlist_details :{collection : 'playlist_details' , params:  params},
			selected_playlist : {collection: 'Tracks', params: params},
			related_playlists : {collection: 'Playlists', params:  params},
			genres : {collection: 'genres' , params: {route : 'selected-playlist'}},  
			
			
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
			
			console.log('tralala' , result.selected_playlist.models[0].attributes.snippet.title == 'Deleted video')
			var image = result.selected_playlist.models[0].attributes.snippet.title
			if(image !== 'Deleted video'){ 
				image = result.selected_playlist.models[0].attributes.snippet.thumbnails.high.url 
			}else{
				 image = ''
			}
			this.app.set('title',  name + ' Playlist | Bongobo');
		 	this.app.set('og_image',   image );
			
			

			callback(null, result);
		}.bind(this));
	}
};