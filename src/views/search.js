var SearchView = Backbone.View.extend({

  events: {
  	'click .btn': 'searchClicked'
  },

  searchClicked: function() {
  	var value = $('input').val();
  	this.collection.search(value);

  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
