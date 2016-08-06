var BaseView = require('../base');
module.exports = BaseView.extend({
  el : "#playlists" ,
  className: 'playlists-view',
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
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
      });
    }


    
  },








});
module.exports.id = 'playlists/playlist_view';
