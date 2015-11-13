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
          console.log("Got a response: ", fbResponse);
          //fb_name = fbResponse.name;
         // ui.titlebox.content = 'Hello {bold}'+fbResponse.name+'{/bold}! ';
        } else {
          console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
      });
	
      ///cycle may look like something like this...
      /*
      data = JSON.parse(data); // you missed that...
  for(var i = 0; i < data.length; i++) {
    var newPerson = new Person();
    newPerson.firstname = data[i].firstname;
    newPerson.lastname = data[i].lastname;
    newPerson.age = data[i].age;
    newPerson.save(function (err) {});
  }
});
      */
}




exports.me = me;
exports.feeds = feeds;