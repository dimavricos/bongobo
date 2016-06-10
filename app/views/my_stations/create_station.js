var BaseView = require('../base');
var Backbone = require('backbone');

 

module.exports = BaseView.extend({
  tagName: 'div',
  el: '#create-station',
  events : {
  	 
  },

  initialize : function(){

},

  postRender: function() {
  	require('ui')  
      
  },

 

 



});
module.exports.id = 'my_stations/create_station';
