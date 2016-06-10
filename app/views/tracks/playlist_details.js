var BaseView = require('../base');
var Backbone = require('backbone'); 
module.exports = BaseView.extend({
  className: 'playlist_details',
  tagName: 'div', 
 
  events : {
  	 
  },

  initialize : function(){

},

  postRender: function() {
  	 console.log(this)
      
  }, 






});
module.exports.id = 'tracks/playlist_details';
