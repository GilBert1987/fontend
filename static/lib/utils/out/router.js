define('router', ['require', 'exports', 'module', 'static/model', 'static/view'], function(require, exports, module) {

  require('static/model');
  var view = require('static/view');
  
  var AppRouter = Backbone.Router.extend({
  	routes:{
  		"":"index"
  	},
  	index:function(options){
  		var pagesize = 10;
          var pageNo = 1;
  		new view().trigger("change");
  		// productsModel.fetch({
  		// 	success:function(model){
  		// 		if(typeof(productsView)!="undefined"){
  		// 			productsView.undelegateEvents();
  		// 		}
  		// 		productsView = view.ProductsView;
  		// 		// productsView.trigger("change");
  		// 	},
  		// 	error:function(){
  		// 		console.log("error");
  		// 	}
  		// });
  	}
  });
  
  module.exports  = AppRouter;

});