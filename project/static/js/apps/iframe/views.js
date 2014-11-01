(function (views, models) {
    views.ImageView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#imageTemplate').html()),
      render: function(){
          this.$el.html( this.template(this.model.toJSON()));
          return this;
      }
    });
    views.ImagesView = Backbone.View.extend({
        tagName: 'ul',
        el: 'body',
        render: function () {
            this.collection.each(function (image) {
                var imageView = new views.ImageView({ model: image });
                this.$el.append(imageView.render().el);
            }, this);
            return this;
        }
    });
})( app.views, app.models);