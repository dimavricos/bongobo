var Base = require('./base');

module.exports = Base.extend({
  url: '/:id',
  idAttribute: 'id'
});
module.exports.id = 'track';