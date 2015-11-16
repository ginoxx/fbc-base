
var config = require('./configuration/config.js');
var request = require('request');
var at = 'CAACEdEose0cBAHDcm6id7bpC8aB1ModTLWSUe07ynjZAhWlgZAfzU7ZCIhKSSPguljqLKD9exICP4eDeAQZCiZC7GrajUDfGWmOMRKEGYBUoC0LNqj1dRIWIru2HrMigYiLGKXDFHTBwXB6xAP5JpyZBb6tZCqsYf9jZBT5pyyYALYVZBhkZC8BIulrvHs06psryz6KZB15ydBW1btwjSJZCuMHa';
var url = config.graph_base_url+'/me/feed?access_token='+at;
      // https://graph.facebook.com/[YOUR_ID]/home
	  request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body);
          var fbResponse = JSON.parse(body);
        console.log('Response: '+fbResponse.data[0].story);
          //
          var items = [];

var data = fbResponse.data;
  data.forEach(function(o) { 
            var story = o.story;
            var message = o.message;
            var title = message + story;
            var date = o.created_time; 
            console.log('ST :'+ title);
            console.log('DR :'+ date);
  
  });
        }
 });