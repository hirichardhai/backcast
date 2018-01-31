var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(search) {
  	var newVideos = this
  	$.ajax({
  		url: 'https://www.googleapis.com/youtube/v3/search',
  		type: 'GET',
  		data: {q: search, part: 'snippet', maxResults: 5, key: window.YOUTUBE_API_KEY},

  		success: function(data) {
  			console.log('you sent a ajax request!');
  			console.log(data);
  			newVideos.reset(data.items);
  			console.log(newVideos);
  		},
  		error: function(err) {
  			console.error(err)
  		}

  	})
  }

});
