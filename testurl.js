
var config = require('./configuration/config.js');
var request = require('request');
var at = 'CAACEdEose0cBAFzhZBbYZBUpzivOcE3nsfYcH3y5G2yxhdWETN9NlltmIESWyZAPxV4yt6zIwdUyIrYviNVbh5PsogSf2ZAUBGSbd7vGtjUmyK0IJvwsLRr0FzLt4UFUyMwSqpewLtByhyzvRRZAUGVGZAIf0GoA3642YZCtFYZAdaGWHbJz82W8ZCdFFam4EyLpOEvd9UQlbZAhpnOrddXieE';
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
            console.log('ST :'+ ftitle);
            console.log('DR :'+ fdate);
            console.log('ID :'+ fid);
  });
        }
 });