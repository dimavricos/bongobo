var BaseView = require('../base');

module.exports = BaseView.extend({
	events : {
		'click .close-search ' : 'closeSearch'
	},


	postRender: function() {
		require('nprogress');
 // Show the progress bar 
 NProgress.start();

    // Increase randomly
    var interval = setInterval(function() { NProgress.inc(); }, 1000);        

    // Trigger finish when page fully loaded
    jQuery(window).load(function () {
    	clearInterval(interval);
    	NProgress.done();
    });

    // Trigger bar when exiting the page
    jQuery(window).unload(function () {
    	NProgress.start();
    });

    $(document).on({
    	ajaxStart: function() { NProgress.start();   },
    	ajaxStop: function() {  NProgress.done(); }    
    });

    $(window).load(function() {
    	$('#loading').fadeOut();
    });

},


closeSearch : function(){
	$('.close-search').parents('.search-column').slideUp()
	$('.search input').val('')
},












});
module.exports.id = 'search/index';
