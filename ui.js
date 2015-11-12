var blessed = require('blessed');
var config  = require('./configuration/config');
var request = require('request');
 //   function loginBox() {
 
//}        


function init(){

    // Create a screen object. 
    screen = blessed.screen({
      smartCSR: true
    });
    
    screen.title = 'fb commander 0.001';
 
    // Quit on Escape, q, or Control-C. 
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    });
    
    // -------------------- LOGIN
       var lgbox = blessed.box({
      top: 'center',
      left: 'center',
      width: '50%',
      height: '50%',
      align: 'center',
      content: 'Login in progress...',
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        bg: 'blue',
        border: {
          fg: '#f0f0f0'
        },
        hover: {
          bg: 'green'
        }
      }
    });
    
      
    
    
    // Append our box to the screen. 
        screen.append(lgbox);
        //screen.append(box);
        
      // Focus our element. 
        lgbox.focus();
    
    
    
    
    // --------------------- END LOGIN
    
    
    
    
   exports.loginBox = lgbox; 
   exports.screen = screen;  
    // Render the screen. 
    screen.render();
    
} // end of init


function main(at){
    
    var url = config.graph_base_url+'/me?access_token='+at;
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var fbResponse = JSON.parse(body);
          console.log("Got a response: ", fbResponse);
          //fb_name = fbResponse.name;
          titlebox.content = 'Hello {bold}'+fbResponse.name+'{/bold}! ';
        } else {
          console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
      });
    
    var titlebox = blessed.box({
        top: 'left',
        left: 'left',
        width: '100%',
        height: '10%',
        //content: '',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'cyan',
            bg: 'blue',
            border: {
            fg: '#f0f0f0',
            style:'bold'
            },
            hover: {
            bg: 'green'
            }
        }
    }); 
    
    screen.append(titlebox);
    screen.render();
    
    
}




exports.init = init;
exports.main = main;

