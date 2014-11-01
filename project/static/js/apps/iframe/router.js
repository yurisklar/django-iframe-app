(function(router, imagesView){
    router.ApiRouter = Backbone.Router.extend({
        routes: {
            "(/)": "initial",
            "tag/:tag_name": "set_tag"
        },
        set_tag: function(tag_name){
            // after new tag is set using location.hash
            console.log("set tag");
            console.log(tag_name);
        },
        initialize: function(){
            console.log("initialize");
            return this.set_loading_images();
            // set default images
        },
        set_loading_images: function(){
            app.imagesView.render();
            // here we render default "loading" images
        }
    });
})(app.router, app.imagesView);


