var BaseView = require('./base');
var http = require('http')


module.exports = BaseView.extend({
	className: 'page_header',

	events : {
		'click .find-from-list button': 'scroll'
	},

	initialize: function(options) {

		this.options = {params : {route : options.param_value }};

	},



	postRender : function(e){
		 		 
		require('owlCarousel')
		$(".genres-carousel").owlCarousel({ 

			pagination : false,
			items : 7,
			margin:0,
			navigation: true,
			navigationText:'',

		});


	},

	scroll: function(){
		$('html, body').animate({
			scrollTop:  350
		});
	}



});
module.exports.id = 'header';
