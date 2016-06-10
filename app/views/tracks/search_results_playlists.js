

var BaseView = require('../base');

module.exports = BaseView.extend({
     className: 'playlists_view',
  tagName: 'div',
  el: '#search-results-playlists',
  events : {
  	 
  },

  


  preRender: function(){
  	console.log(this)
  },
 

 




});
module.exports.id = 'tracks/search_results_playlists';
