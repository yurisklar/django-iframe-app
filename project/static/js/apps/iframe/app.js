(function(){

	window.app = {};
    app.router = {};
	app.views = {};
    app.collections = {};
    app.models = {};

    app.imagesView = {};

	$(function(){

        var imagesCollection = new app.collections.Images([
            {
                image: 'http://image.shutterstock.com/display_pic_with_logo/2330918/198495395/stock-vector-set-of-loading-symbols-198495395.jpg'
            },
            {
                image: 'http://image.shutterstock.com/display_pic_with_logo/2330918/198495395/stock-vector-set-of-loading-symbols-198495395.jpg'
            },
            {
                image: 'http://image.shutterstock.com/display_pic_with_logo/2330918/198495395/stock-vector-set-of-loading-symbols-198495395.jpg'
            },
            {
                image: 'http://image.shutterstock.com/display_pic_with_logo/2330918/198495395/stock-vector-set-of-loading-symbols-198495395.jpg'
            },
            {
                image: 'http://image.shutterstock.com/display_pic_with_logo/2330918/198495395/stock-vector-set-of-loading-symbols-198495395.jpg'
            }
        ]);

        app.imagesView = new app.views.ImagesView({collection: imagesCollection});
		new app.router.ApiRouter();
        Backbone.history.start({root: "/iframe/"});
    });
})();

