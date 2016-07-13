var BaseAppView = require('rendr/client/app_view')
  , $ = require('jquery')
  , $body = $('body')
;

module.exports = BaseAppView.extend({
  initialize: function() {
   
    this.app.on('change:title', function(app, title) {
      document.title = title ;
    });
  }
});