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
		var router = new app.router.ApiRouter();
        Backbone.history.start({root: "/iframe/"});

        var socket = new easyXDM.Socket({
            onMessage: function (message, origin) {
                router.navigate(message, {trigger: true, replace: true});
            }
        });

    });
})();

