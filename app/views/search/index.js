var BaseView = require('../base');

module.exports = BaseView.extend({
  events : {
    'click .close-search ' : 'closeSearch'
  },


  postRender: function() {
 
 },


 closeSearch : function(){
  $('.close-search').parents('.search-column').slideUp()
  $('.search input').val('')
},

 


 

 





});
module.exports.id = 'search/index';
