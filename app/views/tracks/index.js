var BaseView = require('../base');

module.exports = BaseView.extend({

  events : {
    'click .add-btn' : 'add_to_station',
  },

  postRender: function() {


  },

  add_to_station : function(e){ 
    var id = $(e.currentTarget).data('id'); 
    var data = {
      id : id,
      div : e.currentTarget,
    }
 
    this.app.trigger('choose_playlist' , data) 

  },



});
module.exports.id = 'tracks/index';
