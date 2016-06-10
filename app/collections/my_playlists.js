 my_playlist = require('../models/my_playlist'),
  Backbone = require('backbone'),
  LocalStorage = require("backbone.localstorage"),
    Base = require('./base');

module.exports = Base.extend({
  model: my_playlist,
   url: "/youtube/v3/playlists?part=snippet&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults=50&key=AIzaSyAqlQsSdXlfoJehYeMl-vLq_u7u9VU2BNQ",
 
  localStorage: new Backbone.LocalStorage("choose-some-identifier")                  
});
module.exports.id = 'my_playlists';