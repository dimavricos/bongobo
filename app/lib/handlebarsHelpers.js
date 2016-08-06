/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */

 module.exports = function(Handlebars) {
  return {
    copyright: function(year) {
      return new Handlebars.SafeString("&copy;" + year);
    },
    noimage :  function (conditional, options) {
      if (options.hash.value === conditional) {
        return options.inverse(this);
      } else {
       return options.fn(this)

     } 
   },

   grouped_each : function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
      for (i = 0; i < context.length; i++) {
        if (i > 0 && i % every === 0) {
          out += options.fn(subcontext);
          subcontext = [];
        }
        subcontext.push(context[i]);
      }
      out += options.fn(subcontext);
    }
    return out;
  },


  equal : function(lvalue, rvalue, options) {

    if( lvalue === rvalue ) {
      return options.fn(this); 
    } else {
      return options.inverse(this);
    }
  },

  math : function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    
    return {
      "+": lvalue + rvalue,
      "-": lvalue - rvalue,
      "*": lvalue * rvalue,
      "/": lvalue / rvalue,
      "%": lvalue % rvalue
    }[operator];
  },

  trimString :  function(passedString) {
    var theString = passedString.substring(passedString.indexOf(':') + 1);
    return new Handlebars.SafeString(theString)
  },

  trimAndPavla :  function(passedString) {
    var theString = passedString.substring(passedString.indexOf(':') + 1).trim()
    var newString = theString.split(' ').join('-')
    return new Handlebars.SafeString(newString)
  },

  removeSpace: function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/[^A-Z0-9]+/ig, "-");
    return new Handlebars.SafeString(text);
  },

  removePavla : function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/[^A-Z0-9]+/ig, " ");
    return new Handlebars.SafeString(text);
  },


  ifHome :  function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  }


  
}
};
