var Base = require('./base');

module.exports = Base.extend({
  url: function(){
		return "/customsearch/v1?key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ&cx=009129792322825768463:h_hkvr4om5c&q="+this.params.image+"&searchType=image&fileType=png&alt=json"
	} ,
});
module.exports.id = 'artist_image';
