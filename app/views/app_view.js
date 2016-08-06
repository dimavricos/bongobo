var BaseAppView = require('rendr/client/app_view')
  , $ = require('jquery')
  , $body = $('body')
;

module.exports = BaseAppView.extend({
  initialize: function() {
   
    this.app.on('change:title', function(app, title) {
      document.title = title ;
    });


    
    this.app.on('change:og_image', function(app, image) {
    	document.getElementsByTagName("META")[0].content = image
        
    });
  },


});