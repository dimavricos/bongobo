var BaseView = require('../base');
module.exports = BaseView.extend({
	events : {
		'click .my-stations-open' : 'open_my_stations'
	}, 

	preRender: function(){

	},

	postRender : function(){  


	},


	open_my_stations : function(){
		this.app.trigger('open_my_stations' ) 
	}




});
module.exports.id = 'my_stations/open_my_stations';
