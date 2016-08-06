var Base = require('./base');

module.exports = Base.extend({
	url: '/:id',
	idAttribute: 'title'
});
module.exports.id = 'lastfm_artist';
