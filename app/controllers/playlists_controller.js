module.exports = {
	index: function(params, callback) {
		this.app.set('title', 'Playlists ');
		var spec = {
			collection: {collection: 'Playlists', params: params},

		};
		this.app.fetch(spec, function(err, result) {

			if (err) return callback(err);


			var str;
			var name = params.station
			if(typeof name !== "undefined"){ 
				name = name.charAt(0).toUpperCase() + name.slice(1); 
				name1 = name.split('-').join(' ')
				this.app.set('title',  name1 + ' Playlists | Bongobo');
			}else{
				 
				this.app.set('title', "Bongobo | free internet radio with zero audio ads");
			}
			

			callback(null, result);
		}.bind(this));
	}
};