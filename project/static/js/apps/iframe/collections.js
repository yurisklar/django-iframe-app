(function (collections, models) {
    collections.Images = Backbone.Collection.extend({
        model: models.Image
    });
})( app.collections, app.models);
