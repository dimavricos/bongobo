var BaseView = require('../base');
module.exports = BaseView.extend({
	className: 'genres-container',
	events : {

	}, 

	preRender: function(){

	},

	postRender : function(){ 
		require('owlCarousel')
		$(".genres-carousel").owlCarousel({ 

			pagination : false,
			items : 7,
			margin:0,
			navigation: true,
			navigationText:'',

		});


	}


});
module.exports.id = 'search/genres';
