var config  = require('./configuration/config');
var request = require('request');
var ui		= require('./ui');







function me(at) {
	
	  var url = config.graph_base_url+'/me?access_token='+at;
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var fbResponse = JSON.parse(body);
          console.log("Got a response: ", fbResponse);
          //fb_name = fbResponse.name;
          ui.titlebox.content = 'Hello {bold}'+fbResponse.name+'{/bold}! ';
        } else {
          console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
      });
	
}

function feeds(at) {
	
	  var url = config.graph_base_url+'/me/feed?access_token='+at;
      // https://graph.facebook.com/[YOUR_ID]/home
	  request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var fbResponse = JSON.parse(body);
          //
          var items = [];
          
          

var data = fbResponse.data;
  data.forEach(function(o) { 
            if(o.hasOwnProperty('story')){
              ftitle = o.story;
              ftype = 'story';
            }
            else {
              ftitle = o.message;
              ftype = 'message';
              
            }
            var fid = o.id;
            var fdate = o.created_time;
            items.push(ftitle);
            //console.log('ST :'+ ftitle);
            //console.log('DR :'+ fdate);
            //console.log('ID :'+ fid);
  });
          // fill ui list
          //console.log(items);
          ui.feedbox.items = items;
          ui.screen.render();
          //
          //console.log("Got a response: ", fbResponse);
          //fb_name = fbResponse.name;
         // ui.titlebox.content = 'Hello {bold}'+fbResponse.name+'{/bold}! ';
        } else {
          console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
      });
	

}




exports.me = me;
exports.feeds = feeds;