var searchTracks = require('../../collections/search_tracks');
var searchPlaylists = require('../../collections/playlists');
var searchResults = require('../../views/tracks/search_results');
var searchResultsPlaylists = require('../../views/playlists/index');
var BaseView = require('../base');

module.exports = BaseView.extend({
  // el: '.my-search-results',
  className: 'search_view', 
  events : {
    'submit .search-for-tracks' : 'searchForSongs',
    'submit .search-for-playlists' : 'searchForPlaylists',
    'click .search-options ul li' : 'changeSearch',
 
  },


  postRender: function() {
   var height =  $(window).height()
   $('.playlist-container , .tracks-container').height(height);
 },


 closeSearch : function(){
  $('.close-search').parents('.search-column').slideUp()
},

searchForSongs : function(e){
    e.preventDefault();
  var that = this
  var search_tracks = new searchTracks([] , {app : this.app})  
  var search_results = new searchResults({collection : search_tracks , app : this.app} )

  var value = $(e.currentTarget).find('input').val()


  if(value == ""){
    $('.search-column').slideUp();
  }else{
    $('.search-column').slideDown();
  }
  $('.playlists-container').hide();
  $('.tracks-container').show();
  $('.loader').show()

  search_tracks.fetch({

    data : {
     value : value
   },
   success : function(data){   
    search_results.render().$el  
    $('.loader').hide() 
  }
})


},





searchForPlaylists : function(e){
  e.preventDefault();
  var that = this
  var value = $(e.currentTarget).find('input').val() + "-music"
  var search_playlists = new searchPlaylists([] , {app : this.app}) 
  var search_results_playlists = new searchResultsPlaylists({collection : search_playlists , app : this.app} )





  if(value == "-music"){
    $('.search-column').slideUp();
  }else{
    $('.search-column').slideDown();
  }
  $('.tracks-container').hide();
  $('.playlist-container').show();
  $('.loader').show()




  search_playlists.fetch({ 
    data : {
      station : value
    },
    success : function(data){   
     search_results_playlists.render().$el  
     $('.loader').hide()
   }
 })


 
},

changeSearch : function(e){
  $('.search-column').hide();
  $('.search input').val('')
  $('.search-options ul li').removeClass('active')
  $(e.currentTarget).addClass('active')

  var data_id = $(e.currentTarget).data('id')
  if (data_id === "song") {
    $('.playlist-container , .search-for-playlists-container').hide()
    $('.tracks-container , .search-for-tracks-container').show()
  }else{
    $('.playlist-container , .search-for-playlists-container').show()
    $('.tracks-container , .search-for-tracks-container').hide()
  };

}





});
module.exports.id = 'search/tracks_playlists';
