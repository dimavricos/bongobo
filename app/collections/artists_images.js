var artist_image = require('../models/artist_image')
, Base = require('./base');

module.exports = Base.extend({
	model: artist_image,
	url: function(){
		return "/customsearch/v1?key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ&cx=009129792322825768463:h_hkvr4om5c&q="+this.params.image+"&searchType=image&fileType=png&alt=json"
	} ,
	parse: function(response) {  
		return response.items[0];
	},

});
module.exports.id = 'artists_images';