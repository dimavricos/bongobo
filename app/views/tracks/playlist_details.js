var BaseView = require('../base');
var Backbone = require('backbone'); 
module.exports = BaseView.extend({
	className: 'playlist_details',
	tagName: 'div', 

	events : {
		'click .facebook-share-playlist' : 'facebookShare',
		'click .twitter-share-playlist' : 'twitterShare',
		'click .google-share-playlist' : 'googleShare'
	},

	initialize : function(){

	},

	postRender: function() {
		var image = $('.playlist-image img').attr('src')
		$('head').prepend("<meta property='og:image' content='"+image+"'>");
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

		$("a.google-share-playlist").attr('href', 'https://plus.google.com/share?url=' + document.URL);
	}, 


	facebookShare : function(e){
		e.preventDefault()
		FB.ui({
			method: 'feed',
			link: document.URL,
			picture : $('.playlist-image img').attr('src'),
		}, function (response) {
		});
		return false
	},

	twitterShare : function(e){
		var width = 575,
		height = 400,
		left = ($(window).width() - width) / 2,
		top = ($(window).height() - height) / 2,
		url = $(e.currentTarget).attr('href'),
		opts = 'status=1' +
		',width=' + width +
		',height=' + height +
		',top=' + top +
		',left=' + left;

		window.open(url, 'twitter', opts);

		return false;
	},



	googleShare : function(){
		
		var width = 600,
		height = 600,
		left = ($(window).width() - width) / 2,
		top = ($(window).height() - height) / 2,
		url = $(e.currentTarget).attr('href'),
		opts = 'status=1' +
		',menu-bar=no' +
		',toolbar=no,resizable=yes,scrollbars=yes' +
		',width=' + width +
		',height=' + height +
		',top=' + top +
		',left=' + left;

		window.open(url, 'google', opts);

		return false;
	}

	




});







module.exports.id = 'tracks/playlist_details';
