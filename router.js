var Models = require('model');
var Views = require('view');

var AppRouter = Backbone.Router.extend({
	routes:{
		"":"index"
	},

	index:function(options){
		console.log("index called");
		var pageLoading = new Views.PageLoading();
		pageLoading.trigger("change");
		var productListModel = new Models.GetProductsModel(1,10);
		productListModel.fetch({
			success:function(model){
				console.log("loading success");
				productView = new Views.ProductsView({data:model.get("data")});
				productView.trigger("change");
			},
			error:function(){
				console.log("loading error");
				productView = new Views.ProductsView({data:"error"});
				productView.trigger("change");
			}
		});


	}
});

module.exports  = AppRouter;