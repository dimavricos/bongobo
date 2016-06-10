var BaseView = require('../base');
var tracks = require('../../collections/tracks');
var tracks_view = require('../../views/tracks/index')
module.exports = BaseView.extend({
  el : "#playlists" ,
  events : {

  },

  


  preRender: function(){
  	
  },

  postRender : function(){ 
    require('owlCarousel')

    var search = $(".playlists-carousel").parents('.search-column').length

    if(search == 0){
      $(".playlists-carousel").owlCarousel({  
        pagination : true,
        items : 1,
        margin:10,
        navigation: true,
        navigationText : '',

      });
    }


    
  },








});
module.exports.id = 'playlists/index';
