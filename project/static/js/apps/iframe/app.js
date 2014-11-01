(function(){

	window.app = {};
    app.router = {};
	app.views = {};
    app.collections = {};
    app.models = {};

    app.imagesView = {};

	$(function(){
        var imagesCollection = new app.collections.Images({});
        app.imagesView = new app.views.ImagesView({collection: imagesCollection});
		new app.router.ApiRouter();
        Backbone.history.start({root: "/iframe/"});
    });
})();

