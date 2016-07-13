module.exports = function(Handlebars) {

var templates = {};

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"home\">  \n	<h1 class=\"hero-message\">Welcome to <b>Bongobo</b> your new <u>free internet radio</u> with zero audio ads</h1>\n	<div class=\"dark-bg\"> \n		";
  options = {hash:{
    'collection': (depth0.playlists)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "playlists/index", options) : helperMissing.call(depth0, "view", "playlists/index", options)))
    + "  \n	</div> \n</div>\n\n\n\n\n<div>";
  options = {hash:{
    'collection': (depth0.artists)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "playlists/artists", options) : helperMissing.call(depth0, "view", "playlists/artists", options)))
    + "</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
  return buffer;
  });

templates["my_stations/create_station"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "     <div class=\"create-new-station\">\n     <label>CREATE NEW STATION</label>\n             <input id=\"station-name\" type=\"text\" placeholder=\"station name\">\n          <div id=\"save\">Create</div>\n          </div>   \n\n          \n\n         ";
  });

templates["my_stations/edit_my_stations"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n <li data-id=\"";
  if (stack1 = helpers.stationId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"my-station\">  \r\n  <div class=\"my-station-title\">";
  if (stack1 = helpers.stationName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "  \r\n   <span class=\"count\">("
    + escapeExpression(((stack1 = ((stack1 = depth0.playlists),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ") <span>playlists</span></span>  \r\n   <span class=\"delete-station\"> <span>DELETE STATION</span> <i class=\"fa fa-trash-o\"></i></span>\r\n   \r\n </div> \r\n <ul class=\"my-station-playlists\" data-id=\"";
  if (stack2 = helpers.stationId) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.stationId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n   ";
  stack2 = helpers.each.call(depth0, depth0.playlists, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n</ul>\r\n</li>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "  \r\n   <li data-station=\""
    + escapeExpression(((stack1 = depth0.station),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \r\n    <div class=\"col-md-10 playlist-name\">\r\n      <img src=\""
    + escapeExpression(((stack1 = depth0.image),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n      "
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n    </div> \r\n    <div class=\"col-md-2 playlist-actions\">\r\n      <span class=\"remove-playlist\" data-id=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">  \r\n        <i class=\"fa fa-times\"></i>\r\n      </span> \r\n      \r\n    </div>   \r\n  </li>\r\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <li class='no-playlists'>\r\n    <b>No playlists yet!</b> \r\n  </li>\r\n  "
    + escapeExpression(((stack1 = depth0.length),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\r\n\r\n<span class=\"no-stations\">YOU HAVE NO STATIONS YET</span>\r\n\r\n";
  }

  buffer += "<ul class=\"my-stations\">\r\n\r\n\r\n\r\n ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \r\n</ul>\r\n\r\n";
  return buffer;
  });

templates["my_stations/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"my-stations\"></div>  \n<div class=\"edit-my-stations-container\">\n  <div class=\"edit-my-stations\">\n    <span class=\"close-popup\">\n      <i class=\"fa fa-times\"></i>\n    </span>\n    <div id=\"edit-my-stations\"></div> \n  </div> \n</div>";
  });

templates["my_stations/my_stations"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n    <li data-id=\"";
  if (stack1 = helpers.playlistId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playlistId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"my-station\">  \r\n      <div class=\"my-station-title\">";
  if (stack1 = helpers.stationName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "  <img src=\"images/radio-icon.png\" alt=\"{stationName}}\">\r\n        <span class=\"open\"><i class=\"fa fa-chevron-down\"></i></span>\r\n        <span class=\"count\">("
    + escapeExpression(((stack1 = ((stack1 = depth0.playlists),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ") <span>playlists</span></span>  \r\n      </div> \r\n      <ul class=\"my-station-playlists\">\r\n       ";
  stack2 = helpers.each.call(depth0, depth0.playlists, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n    </ul>\r\n  </li>\r\n\r\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "  \r\n       <li> \r\n        <div class=\"playlist-name\">\r\n          <a href=\"/tracks?station="
    + escapeExpression(((stack1 = depth0.station),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&name="
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&playlistId="
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n            <img src=\"";
  if (stack2 = helpers.image) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.image; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" alt=\""
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n            <span>"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n          </a>\r\n        </div> \r\n\r\n      </li>\r\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n      <li class='no-playlists' title=\"No playlists yet! Add songs to your playlist using the + icon\">\r\n        <b>No playlists yet!</b> \r\n        Add playlists to your station using the\r\n        <i><img src=\"images/radio-icon.png\" alt=\"plus\"></i> button\r\n      </li>\r\n      "
    + escapeExpression(((stack1 = depth0.length),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\r\n\r\n  <li>\r\n    <div class=\"hello-message\">\r\n\r\n      <section>\r\n        NO STATIONS YET. CREATE STATIONS AND ADD PLAYLISTS!\r\n      </section>\r\n    </div>\r\n  </li>\r\n\r\n  ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <li >\r\n    <div data-id=\"";
  if (stack1 = helpers.stationId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"checkboxFour\"> \r\n      <input type=\"radio\" name=\"choose-station\" value=\"";
  if (stack1 = helpers.stationId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"";
  if (stack1 = helpers.stationId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n      <label for=\"";
  if (stack1 = helpers.stationId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.stationName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stationName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span>("
    + escapeExpression(((stack1 = ((stack1 = depth0.playlists),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ") playlists</span>  </label> \r\n    </div>\r\n  </li>\r\n\r\n  ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n  ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "my_stations/create_station", options) : helperMissing.call(depth0, "view", "my_stations/create_station", options)))
    + "\r\n\r\n\r\n\r\n  ";
  return buffer;
  }

  buffer += " <div class=\"my-stations-container\">\r\n  <div>\r\n    <span class=\"close-popup\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </span>\r\n  </div>\r\n\r\n  ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "my_stations/create_station", options) : helperMissing.call(depth0, "view", "my_stations/create_station", options)))
    + "\r\n\r\n  <ul class=\"my-stations\">\r\n\r\n\r\n\r\n    <li class=\"first-li\">My Stations \r\n      <span class=\"open-edit-my-stations\">EDIT <i class=\"fa fa-pencil-square-o\"></i></span>\r\n    </li>\r\n\r\n    ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n</ul>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"pick-a-station-container\">\r\n\r\n\r\n  <div class=\"pick-a-station\">\r\n   <span class=\"close-popup\">\r\n    <i class=\"fa fa-times\"></i>\r\n  </span>\r\n  <ul>\r\n    <li>ADD PLAYLIST TO A STATION</li>\r\n  </ul>\r\n  <div class=\"picked-playlist\">\r\n   <img src=\"\" class=\"picked-station-image\">\r\n   <div class=\"picked-station-id\"></div>\r\n   <div class=\"picked-station-name\"></div>\r\n   <div class=\"picked-station-station\"></div>\r\n </div>\r\n <ul>\r\n  <li>PICK A STATION:</li>\r\n  ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \r\n\r\n</ul>\r\n\r\n<button class=\"open-small-message\">ADD</button> \r\n\r\n\r\n<div class=\"small-message\">\r\n  <div>sure?</div>\r\n  <button class=\"add-playlist-to-station\">YES</button>\r\n  <button class=\"not-sure\">NO</button>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n";
  return buffer;
  });

templates["my_stations/open_my_stations"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <button class=\"my-stations-open\">My Stations <img src=\"images/radio-icon.png\" alt=\"radio\"></button> ";
  });

templates["playlists/artists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n		<a href=\"/playlists?station=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.trimAndPavla || depth0.trimAndPavla),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "trimAndPavla", depth0.title, options)))
    + "-music\">\n			<span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.math || depth0.math),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "+", 1, options) : helperMissing.call(depth0, "math", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "+", 1, options)))
    + "</span>\n			";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.trimString || depth0.trimString),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "trimString", depth0.title, options)))
    + "\n		</a> \n		";
  return buffer;
  }

  buffer += "	<div class=\"title\">\n		<img src=\"images/billboard.png\">\n		<div>Top 15 Artists Stations</div>\n		<span></span>\n	</div>\n	<div class=\"artists\">\n\n		";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n\n<!-- ";
  options = {hash:{
    'collection_name': ("artists_images"),
    'param_name': ("image"),
    'param_value': (depth0.drake),
    'lazy': ("true")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "playlists/artists_images", options) : helperMissing.call(depth0, "view", "playlists/artists_images", options)))
    + " -->";
  return buffer;
  });

templates["playlists/artists_images"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "jh";
  });

templates["playlists/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"item\">  \n       ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  </div>\n  ";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n       ";
  options = {hash:{
    'value': ("https://i.ytimg.com/vi/default.jpg")
  },inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth2),data:data};
  stack2 = ((stack1 = helpers.noimage || depth0.noimage),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),stack1 == null || stack1 === false ? stack1 : stack1.url), options) : helperMissing.call(depth0, "noimage", ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),stack1 == null || stack1 === false ? stack1 : stack1.url), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "   \n\n    ";
  return buffer;
  }
function program3(depth0,data,depth3) {
  
  var buffer = "", stack1, options;
  buffer += "\n       <a href=\"/tracks?station=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.removeSpace || depth3.removeSpace),stack1 ? stack1.call(depth0, ((stack1 = depth3.params),stack1 == null || stack1 === false ? stack1 : stack1.station), options) : helperMissing.call(depth0, "removeSpace", ((stack1 = depth3.params),stack1 == null || stack1 === false ? stack1 : stack1.station), options)))
    + "&name=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.removeSpace || depth0.removeSpace),stack1 ? stack1.call(depth0, ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title), options) : helperMissing.call(depth0, "removeSpace", ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title), options)))
    + "&playlistId="
    + escapeExpression(((stack1 = ((stack1 = depth0.id),stack1 == null || stack1 === false ? stack1 : stack1.playlistId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"show\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div data-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.id),stack1 == null || stack1 === false ? stack1 : stack1.playlistId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"image\"> \n         <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"thumb\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n         <div class=\"playlist-details\"> \n\n          <i class=\"fa fa-play-circle\"></i>\n        </div> \n\n      </div>\n      <h3 class=\"playlist-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3> \n    </a>  \n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n";
  }

function program7(depth0,data) {
  
  
  return "\n<span class=\"no-results\">NO PLAYLISTS FOUND</span>\n";
  }

  buffer += "\n\n\n<div class=\"col-md-8 col-md-offset-2\">\n  <div class=\"row\">\n\n  	<h2 class=\"title\">\n      <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.removePavla || depth0.removePavla),stack1 ? stack1.call(depth0, ((stack1 = depth0.params),stack1 == null || stack1 === false ? stack1 : stack1.station), options) : helperMissing.call(depth0, "removePavla", ((stack1 = depth0.params),stack1 == null || stack1 === false ? stack1 : stack1.station), options)))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Playlists)</div> \n      <span></span>\n    </h2>\n    <div class=\"playlists-carousel\"> \n      ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  stack2 = ((stack1 = helpers.grouped_each || depth0.grouped_each),stack1 ? stack1.call(depth0, 9, depth0.models, options) : helperMissing.call(depth0, "grouped_each", 9, depth0.models, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " \n</div>\n\n</div>\n</div>\n\n\n\n";
  stack2 = helpers['if'].call(depth0, depth0.models, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n";
  return buffer;
  });

templates["search/genres"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"genres\">\n  <div class=\"container\">\n    <div class=\"title\">Genre Stations <span></span></div>\n    <div class=\"genres-carousel\">\n     <span class=\"item\"><a href=\"/playlists?station=top-100-music\" class=\"active\">Top 100 <i class=\"fa fa-bolt\" aria-hidden=\"true\"></i></a></span>\n     <span class=\"item\"><a href=\"/playlists?station=pop-music\">Pop</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=country-music\">Country</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=country-music\">Hip Hop</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=workout-music\">Workout</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Dance-music\">Dance</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Party-music\">Party</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Sleep-music\">Sleep</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Dinner-music\">Dinner</a></span>\n     <span class=\"item\"> <a href=\"/playlists?station=Chill-music\">Chill</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=love-music\">Love Songs</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=rnb-soul-music\">R&B/Soul</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Rock-music\">Rock</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Punk-music\">Punk</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Metal-music\">Metal</a></span>\n     <span class=\"item\"><a href=\"/playlists?station=Indie-music\">Indie</a></span>\n   </div>\n </div>\n</div>";
  });

templates["search/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"search-column\">\n <div class=\"open-search\">\n  <i class=\"fa fa-arrow-left\"></i>\n</div>\n<div class=\"my-search-results\">\n  <section>  \n    <div  class=\"tracks-container\">\n      <div class=\"close-search \"><i class=\"fa fa-times\"></i></div>\n      <span class=\"results-label\">SEARCH RESULTS FOR:</span>  \n      <div id=\"search-results\"></div>   \n      <div class=\"loader\"><img src=\"images/ajax-loader.gif\"></div>\n    </div> \n    <div  class=\"playlist-container\"> \n      <div class=\"close-search \"><i class=\"fa fa-times\"></i></div>\n      <span class=\"results-label\">SEARCH RESULTS FOR:</span>  \n      <div id=\"playlists\"></div>   \n      <div class=\"loader\"><img src=\"images/ajax-loader.gif\"></div>\n    </div>   \n  </section>\n</div> \n</div>";
  });

templates["search/tracks_playlists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "		<div class=\"search-for\">  \r\n			<span class=\"light-bg\">Search for</span>\r\n\r\n			<div class=\"search-options\">\r\n				<ul>\r\n					<li data-id=\"music\" class=\"active\">Playlist</li>\r\n					<li data-id=\"song\" >Track</li>  \r\n				</ul>\r\n			</div> \r\n\r\n			<div class=\"search\">\r\n				<div> \r\n					<div class=\"search-for-playlists-container\">\r\n						<form class=\"search-for-playlists\" > \r\n							<input  type=\"text\" placeholder=\"Type the playlist you want to find\">\r\n							<button type=\"submit\"><i class=\"fa fa-search\"></i> Search</button>\r\n						</form> \r\n					</div> \r\n\r\n					<div class=\"search-for-tracks-container\">\r\n						<form class=\"search-for-tracks\" > \r\n							<input  type=\"text\" placeholder=\"Type the track you want to find\">\r\n							<button type=\"submit\"><i class=\"fa fa-search\"></i> Search</button>\r\n						</form> \r\n					</div> \r\n\r\n				 \r\n					\r\n				</div> \r\n			</div> \r\n\r\n		</div> \r\n\r\n\r\n";
  });

templates["tracks/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "\n\n\n<div class=\"player-container\">\n\n	";
  options = {hash:{
    'collection': (depth0.playlist_details)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "tracks/playlist_details", options) : helperMissing.call(depth0, "view", "tracks/playlist_details", options)))
    + "   \n\n	";
  options = {hash:{
    'collection': (depth0.selected_playlist)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "tracks/selected_playlist", options) : helperMissing.call(depth0, "view", "tracks/selected_playlist", options)))
    + " \n\n</div>\n\n<div class=\"related-playlists\">\n	 \n	";
  options = {hash:{
    'collection': (depth0.related_playlists)
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "playlists/index", options) : helperMissing.call(depth0, "view", "playlists/index", options)))
    + "\n\n</div>\n\n\n";
  return buffer;
  });

templates["tracks/playlist_details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<div class=\"playlist-info\"> \n	<div class=\"share-playlist\">\n		<span>Share on:</span>\n		<a href=\"\" class=\"fb facebook-share-playlist\"><i class=\"fa fa-facebook\"></i></a>\n		<a href=\"\" class=\"tw twitter-share-playlist\"><i class=\"fa fa-twitter\"></i></a>\n		<a href=\"\" class=\"gplus google-share-playlist\"><i class=\"fa fa-google-plus\"></i></a>\n	</div>\n	<div class=\"playlist-image\">\n		<span class=\"image-radius\"></span> \n		<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n	</div>\n	<div class=\"add-to-favourites add-btn\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-image=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1['default'])),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-station=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.params),stack1 == null || stack1 === false ? stack1 : stack1.station)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		Add to My Stations \n		<i><img src=\"images/radio-icon.png\"></i>\n	</div> 	\n	<div class=\"title\">\n		<h1> "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n		<div class=\"playilist-length\"> \n			Tracks: \n			<span> </span> \n		</div>  \n		<span></span>\n	</div>\n	\n</div>";
  return buffer;
  });

templates["tracks/search_results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \r\n    <li>  \r\n      <a href=\"\">\r\n         <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </span>\r\n      </a> \r\n   </li>\r\n\r\n\r\n   ";
  return buffer;
  }

  buffer += " \r\n\r\n    \r\n  <div class=\"title\">\r\n    <div>"
    + escapeExpression(((stack1 = ((stack1 = depth0.params),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " TRACKS)</div>\r\n  </div>\r\n \r\n<div class=\"container\">\r\n  <ul class=\"my-playlist-tracks\">\r\n    ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n </ul>\r\n</div>\r\n\r\n\r\n";
  return buffer;
  });

templates["tracks/search_results_playlists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n    <div data-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.id),stack1 == null || stack1 === false ? stack1 : stack1.playlistId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"show\"> \n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <div class=\"col-md-9 track-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>   \n        <div class=\"col-md-3 track-actions\"> \n          <span class=\"play-track\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.id),stack1 == null || stack1 === false ? stack1 : stack1.videoId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n            <i class=\"fa fa-play-circle-o\"></i>\n          </span>  \n        </div>   \n    </div> \n";
  return buffer;
  }

  buffer += "<div class=\"col-md-7  title\">\n    <div class=\"close-search \"><i class=\"fa fa-times\"></i></div>\n    Search Results   \n    <span> ("
    + escapeExpression(((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ") Playlists</span>\n    <div class=\"search-value\"></div>\n</div>\n<div class=\"my-playlist-tracks\" id=\"youtube-playlist\">\n    ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n\n";
  return buffer;
  });

templates["tracks/selected_playlist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " \n                <li class=\"light-bg\" data-track=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.resourceId)),stack1 == null || stack1 === false ? stack1 : stack1.videoId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \n                    <div class=\"col-md-9 track-name\">\n                      <span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.math || depth0.math),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "+", 1, options) : helperMissing.call(depth0, "math", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "+", 1, options)))
    + "</span> "
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                  </div> \n                  <div class=\"col-md-2\">\n                    <span class=\"musicbar bg-success bg-empty animate\"> \n                        <span class=\"bar1 a3 lter\"></span> \n                        <span class=\"bar2 a5 lt\"></span> \n                        <span class=\"bar3 a1 bg\"></span> \n                        <span class=\"bar4 a4 dk\"></span> \n                        <span class=\"bar5 a2 dker\"></span> \n                    </span>\n                </div>\n                <div class=\"col-md-1 track-actions\"> \n                    <span class=\"play-track\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.resourceId)),stack1 == null || stack1 === false ? stack1 : stack1.videoId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"play\"> \n                        <i class=\"fa fa-play\"></i>\n                    </span> \n                    <span class=\"track-play-pause \" title=\"pause/play\">\n\n                        <i class=\"fa fa-pause\"></i>\n                    </span> \n           <!--      <span class=\"add-btn\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.resourceId)),stack1 == null || stack1 === false ? stack1 : stack1.videoId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-name=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.snippet),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"add to playlist\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>  -->\n            </div>   \n        </li>\n\n\n        ";
  return buffer;
  }

  buffer += "<!-- <div class=\"img-bg\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[2])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[3])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[4])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[5])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[6])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[7])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.models),stack1 == null || stack1 === false ? stack1 : stack1[8])),stack1 == null || stack1 === false ? stack1 : stack1.snippet)),stack1 == null || stack1 === false ? stack1 : stack1.thumbnails)),stack1 == null || stack1 === false ? stack1 : stack1.high)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n</div> -->\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "youtube_player", options) : helperMissing.call(depth0, "view", "youtube_player", options)))
    + " \n<div class=\"col-md-6\"> \n    <div class=\"row\">\n        <div id=\"youtube-playlist\"> \n            <ul class=\"playlist-tracks\">\n                ";
  stack2 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </ul>\n</div>\n</div> \n</div>\n";
  return buffer;
  });

templates["youtube_player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\r\n\r\n<div class=\"player-actions\"> \r\n	<div>\r\n		<div class=\"col-md-1\">\r\n			<span class=\"share-label\">Share</span>\r\n		</div> \r\n		<div class=\"col-md-5 track-progress\">\r\n			<div class=\"track-seek-bar\">\r\n				<div class=\"now-playing\"></div>\r\n				<div class=\"time\">\r\n					<div class=\"track-current-time\">0:00</div>\r\n					<div class=\"track-duration\">0:00</div> \r\n				</div>\r\n				<div class=\"track-play-bar\"></div>\r\n			</div>\r\n		</div> \r\n		<div class=\"controls\">\r\n			<button class=\"expand-video\" title=\"expand video\">\r\n				<i class=\"fa fa-expand\"></i>\r\n			</button>\r\n			<button class=\"prev-track\" title=\"previous track\">\r\n				<i class=\"fa fa-step-backward fa-3\"></i>\r\n			</button>  \r\n			<button class=\"track-play-pause\" >\r\n				<i class=\"fa fa-play fa-3\"></i>\r\n			</button>\r\n			<button class=\"next-track\" title=\"next track\">\r\n				<i class=\"fa fa-step-forward fa-3\"></i>\r\n			</button>  \r\n			<button class=\"volume\" title=\"volume\">\r\n				<span class=\"volume-mute-unmute volume-mute\">\r\n					<i class=\"fa fa-volume-off\"></i>\r\n					<i class=\"fa fa-volume-up\"></i>\r\n				</span> \r\n				<span class=\"volume-bar\">\r\n					<span class=\"volume-bar-value\"></span>\r\n				</span>\r\n			</button> \r\n		</div> \r\n	</div>\r\n</div> \r\n<div class=\"col-md-1\">\r\n	<div class=\"row\">\r\n		<div class=\"share\">\r\n			<div class=\"dark-bg facebook\">\r\n				<i class=\"fa fa-facebook\"></i>\r\n			</div>\r\n			<div class=\"dark-bg twitter\">\r\n				<i class=\"fa fa-twitter\"></i>\r\n			</div>\r\n			<div class=\"dark-bg google-plus\">\r\n				<i class=\"fa fa-google-plus\"></i>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"col-md-5\">\r\n	<div class=\"row\">\r\n		<div id=\"player\">\r\n			<span class=\"minimize-video\">\r\n				<i class=\"fa fa-compress\"></i>\r\n			</span>\r\n			<span class=\"player-overlay\"></span>\r\n		</div>\r\n	</div> \r\n</div>\r\n\r\n";
  });

return templates;

};