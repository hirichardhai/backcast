var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.fakeVideoData);
    this.videoList = new VideoListView(this.videos);
    this.videoListEntryView = new VideoListEntryView(this.videos);
    this.videoPlayer = new VideoPlayerView(this.videos);
    this.searchView = new SearchView();
    // this.videoPlayer.render();
    this.render();


  },

  render: function() {
    this.$el.html(this.template());
    return this.el;
  },

  template: templateURL('src/templates/app.html')

});
