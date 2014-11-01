(function(router, imagesView){
    router.ApiRouter = Backbone.Router.extend({
        routes: {
            "(/)": "initial",
            "tag/:tag_name": "set_tag"
        },
        set_tag: function(tag_name){
            // first show loading images
            this.set_loading_images();
            // and now load necessary images
            app.imagesView.collection.url = '/images/' + tag_name;
            app.imagesView.collection.fetch({
                url: '/images/' + tag_name,
                success: function (collection) {
                    this.set_images_collection(collection)
                }.bind(this)
            });
        },
        initialize: function(){
            // first show loading images
            return this.set_loading_images();
        },
        set_images_collection: function(collection){
            app.imagesView.collection = collection;
            app.imagesView.render();
        },
        set_loading_images: function(){
            var default_array = [];
            for (var i = 0; i < 5; i++){
                default_array.push(window.loading_image_obj);
            }
            app.imagesView.collection.reset(default_array);
            app.imagesView.render();
        }
    });
})(app.router, app.imagesView);


