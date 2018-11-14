require("utils");

var Models={};

Models.GetProductsModel = Backbone.Model.extend({
	apiUrl:"",
	initialize:function(page, pageSize){
		this.apiUrl = "/api/products?page="+page+"&pageSize="+pageSize;
	},
	url:function(){
		return this.apiUrl;
	}
});

module.exports  = Models;