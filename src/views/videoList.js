var VideoListView = Backbone.View.extend({

  initialize: function(video) {
    // this.videos = new Videos(test2);
    console.log(video);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this.el;
  },

  template: templateURL('src/templates/videoList.html')

});

