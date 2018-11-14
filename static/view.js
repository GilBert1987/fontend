require("utils");
var Models = require("model");

var Views = {};

Views.ProductsView = Backbone.View.extend({
    el:"#body",
    data:[],
    model:new Models.GetProductsModel(1, 10),
    initialize:function(data){
    	this.data = data;
        this.on("change",this.render,this);
    },
    template:_.template(__inline('template/productList.html')),
    render:function(){
       $(this.el).html(this.template({data:this.data}));
    }
});

Views.PageLoading = Backbone.View.extend({
    el:"#body",
    template:_.template(__inline('template/loading.html')),
    initialize:function(){
        this.on("change",this.render,this);
    },
    render:function(){
        this.$el.html(this.template());
    }
});

module.exports  = Views;