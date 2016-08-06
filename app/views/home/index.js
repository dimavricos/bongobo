var BaseView = require('../base');


module.exports = BaseView.extend({
	className: 'home_index_view',

	events : {

		'click .view-all-music-lists' : 'show_all',
		
	},


	postRender : function(e){



	},


	show_all : function(e){
		$('.music-list , .view-all-music-lists').toggleClass('open')
		if ( $( e.currentTarget).hasClass( "open" ) ) {
			$(e.currentTarget).text('View Less')

		}else{
			$(e.currentTarget).text('View All')
			$('html, body').animate({
				scrollTop: 300
			});
		}
	},






});
module.exports.id = 'home/index';
