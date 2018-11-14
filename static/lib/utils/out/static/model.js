define('static/model', ['require', 'exports', 'module', "static/lib/utils/utils"], function(require, exports, module) {

  require("static/lib/utils/utils");
  
  var GetProductsModel = Backbone.Model.extend({
  	apiUrl:"",
  	initialize:function(){
  		this.apiUrl = "/api/products?page=0";
  	},
  	url:function(){
  		return this.apiUrl;
  	}
  });
  
  module.exports  = GetProductsModel;

});