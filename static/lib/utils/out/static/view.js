define('static/view', ['require', 'exports', 'module', "static/lib/utils/utils", "static/model"], function(require, exports, module) {

  require("static/lib/utils/utils");
  var model = require("static/model");
  
  var ProductsView = Backbone.View.extend({
      el:"#body",
      model:model.GetProductsModel,
      initialize:function(){
          this.on("change",this.render,this);
      },
      template:_.template("<div class=\"container\">\n                              <div class=\"responsive fifty\">\n                                    <span class=\"h3\">\n                                          heasdidjwlkejfmlscms sdfoksldfmslofkpsod\n                                    </span>\n                              </div>\n</div>"),
      render:function(){
         $(this.el).html(this.template());
      }
  
  });
  
  module.exports  = ProductsView;

});