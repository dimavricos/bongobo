var BaseView = require('../base');
var Backbone = require('backbone'); 
module.exports = BaseView.extend({


  youtube_id : null,

  events : { 
    'click .play-track' : 'play_track',
    'click .play-custom' : 'play_track',
    "click .track-playing" : 'track_playing',
    "click .track-paused" : 'track_paused' ,
    "click .track-seek-bar" : 'track_seek',
    "click .next-track" : 'track_next', 
    "click .prev-track" : 'track_prev', 
    "click .volume-bar" : 'volume_adjust',
    'click .volume-mute' : 'volume_mute',
    "click .volume-unmute" : 'volume_unmute',
    "click .expand-video" : 'expand_video',
    "click .minimize-video" : 'minimize_video',
    "click .facebook" : 'share_facebook',
    "click .twitter" : 'share_twitter',
    "click .google-plus" : 'share_google',
  },

  youTubeFrequency : 100 ,
  youTubeInterval : 0 ,
  pane : null,

  postRender: function() {
    var that = this
    require('youtube'); 
    require('scrollPane'); 
    require('mouseWheel');
    $('.playilist-length span').html(this.collection.length)

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1716307738621101',
        xfbml      : true,
        version    : 'v2.6'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $("#player").tubeplayer({
    width: '100%', // the width of the player
    height: '100%', // the height of the player
    allowFullScreen: false, // true by default, allow user to go full screen
    initialVideo:  that.collection.models[0].attributes.snippet.resourceId.videoId, // the video that is loaded into the player
    preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
    showControls : 0,
    showinfo : false,
    autoPlay: true,
    theme : 'dark',
    color : 'white',
    onPlayerUnstarted: function(){}, // when the player returns a state of unstarted
    onPlayerEnded: function(){}, // when the player returns a state of ended
    onPlayerPlaying: function(){ $('button.track-paused').click() }, //when the player returns a state of playing 
    onPlayerBuffering: function(){$('button.track-paused').click()},
    onPlayerPaused:  function(){ $('button.track-playing').click()},
    onPlayerEnded : that.track_next,
    onErrorNotFound:  that.track_next, // if a video cant be found
    onErrorNotEmbeddable: that.track_next, // if a video isnt embeddable
    onErrorInvalidParameter: that.track_next // if we've got an invalid param 

  });

this.pane =  $('#youtube-playlist').jScrollPane({
  contentWidth: '0px'
});

console.log(this)

var youtubeReady = setInterval(function(){
 var ready = $('.jquery-youtube-tubeplayer iframe').length
 if(ready = 1){
  clearInterval(youtubeReady)
  $('#youtube-playlist .playlist-tracks li').first().find('.play-track').click()
} 
})

},




play_track : function(e){ 
  var that = this
  var id = $(e.currentTarget).data('id'); 
  $('.active-track').removeClass('active-track')  
  $(e.currentTarget).parents('.playlist-tracks li').addClass('active-track') 
  $('#player').tubeplayer('play', id);
  $('.track-play-pause').removeClass('track-paused').addClass('track-playing').find('i').removeClass('fa-play').addClass('fa-pause')  

  now_playing = $('.active-track').find('.track-name').text()
  $('.now-playing').html(now_playing)

  setTimeout(function(){  
    that.startYoutubeTime()
  }, 3000);


  var api = that.pane.data('jsp');
  var target_offset = $("li[data-track='"+id+"']").prevAll().length
  var height = $('.playlist-tracks li').height()
  api.scrollTo( 0 ,   target_offset*52  , 1000);

  that.youtube_id = id
  $(".google").attr('href', 'https://plus.google.com/share?url=https://www.youtube.com/watch?v=' + that.youtube_id);
  $(".twitter").attr('href', 'http://twitter.com/share?url=https://www.youtube.com/watch?v=' + that.youtube_id);
},

track_playing : function(e){ 

  var that = this
  clearInterval(that.youTubeInterval) ;
  $('.track-playing').removeClass('track-playing').addClass('track-paused').find('i').removeClass('fa-pause').addClass('fa-play')  
  $("#player").tubeplayer("pause"); 
  $('.active-track .musicbar').removeClass('animate')
},

track_paused : function(e){  
  var that = this
  $('.track-paused').removeClass('track-paused').addClass('track-playing').find('i').removeClass('fa-play').addClass('fa-pause')
  $("#player").tubeplayer("play");
  that.startYoutubeTime()
  $('.active-track .musicbar').addClass('animate')

},

track_seek :function(e){
  var that = this
  var duration = $("#player").tubeplayer("data").duration
  var posX = $(e.currentTarget).offset().left, posWidth = $(e.currentTarget).width();
  posX = (e.pageX-posX)/posWidth;
  $('.track-progress .track-play-bar').width( (posX*100)+'%' );
  posX = Math.round((posX)*duration);

  $("#player").tubeplayer("seek", posX , true);
  $("#player").tubeplayer("play");
  $('.track-play-pause').removeClass('track-paused').addClass('track-playing').find('i').removeClass('fa-play').addClass('fa-pause')  


  that.startYoutubeTime()
},


startYoutubeTime : function (){
  var that = this; 
    that.youTubeInterval = setInterval( that.updateYoutubeTime , 100 );  // run
  },

  updateYoutubeTime :   function(){
   var that = this
   var duration_rounded; 
   var duration;
   var currentTime;
   if($("#player").tubeplayer("data").duration !== undefined){
    duration_rounded = $("#player").tubeplayer("data").duration.toFixed();
    duration = $("#player").tubeplayer("data").duration;
    currentTime = $("#player").tubeplayer("data").currentTime.toFixed();
  }
  


  if( currentTime >=60 ){
    $('.track-current-time').text( Math.floor(currentTime /60)+':'+FormatNumberLength(Math.round(currentTime %60),2) );
  }else{
    $('.track-current-time').text( '0:'+FormatNumberLength(currentTime ,2) );
  } 

  $('.track-progress .track-play-bar').width( Math.round(( currentTime / duration)*100)+'%' ); 
  $('.track-duration').text( Math.floor(duration /60)+':'+FormatNumberLength(Math.round(duration %60),2) );
  function FormatNumberLength(num,length){var r=""+num;while(r.length<length){r="0"+r;}return r;}  
},


volume_adjust : function(e){
  $("#player").tubeplayer('unmute')
  var posX = $(e.currentTarget).offset().left, posWidth = $(e.currentTarget).width();
  posX = (e.pageX-posX)/posWidth;
  $('.volume-bar .volume-bar-value').width( (posX*100)+'%' ).show();
  $("#player").tubeplayer('volume' , posX*100)   

  $(".volume-mute-unmute").removeClass('volume-unmute');
  $(".volume-mute-unmute").addClass('volume-mute');
},

volume_mute : function(e){ 
  $("#player").tubeplayer('mute') 
  $(".volume-mute-unmute").toggleClass('volume-mute volume-unmute');
  $('.volume-bar-value').hide()
},

volume_unmute : function(){
  $("#player").tubeplayer('unmute') 
  $(".volume-mute-unmute").toggleClass('volume-unmute volume-mute');
  $('.volume-bar-value').show()
},


track_next: function(){
  var play_next  =  $('.active-track')
  if (play_next !== []) {
    play_next.next().find('.play-track').click()
  }else{
    $('.track-play-pause').removeClass('track-playing').addClass('track-paused').find('i').removeClass('fa-pause').addClass('fa-play')  

  }

},

track_prev: function(e){
  var prev = $('.active-track').prev();
  if(prev !== []){
    $('.active-track').prev().find('.play-track').click()
  } 
  
}, 

expand_video : function(){
  $('#player').addClass('maximized')

},


minimize_video : function(){
  $('#player').removeClass('maximized')
},

share_facebook: function(e){
  var that = this
  FB.ui({
    method: 'feed',
    link: "https://www.youtube.com/watch?v="+that.youtube_id,
  }, function (response) {
  });
  return false
},

share_twitter: function(){
  var that = this
  var width = 575,
  height = 400,
  left = ($(window).width() - width) / 2,
  top = ($(window).height() - height) / 2,
  url = "http://twitter.com/share?url=https://www.youtube.com/watch?v="+that.youtube_id,
  opts = 'status=1' +
  ',width=' + width +
  ',height=' + height +
  ',top=' + top +
  ',left=' + left;

  window.open(url, 'twitter', opts);

  return false;
},

share_google: function(e){
  var that = this
  var width = 600,
  height = 600,
  left = ($(window).width() - width) / 2,
  top = ($(window).height() - height) / 2,
  url = "https://plus.google.com/share?url=https://www.youtube.com/watch?v="+that.youtube_id,
  opts = 'status=1' +
  ',menu-bar=no' +
  ',toolbar=no,resizable=yes,scrollbars=yes' +
  ',width=' + width +
  ',height=' + height +
  ',top=' + top +
  ',left=' + left;

  window.open(url, 'google', opts);

  return false;
},


});
module.exports.id = 'tracks/selected_playlist';
