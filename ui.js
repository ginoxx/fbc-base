var blessed = require('blessed');

 //   function loginBox() {
 
//}        


function ui_init(){

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
      top: 'left',
      left: 'left',
      width: '50%',
      height: '50%',
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
    
      // If box is focused, handle `enter`/`return` and give us some more content. 
        lgbox.key('enter', function(ch, key) {
          lgbox.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
          lgbox.setLine(1, 'bar');
          lgbox.insertLine(1, 'foo');
          screen.render();
        });
    
    
    // Append our box to the screen. 
        screen.append(lgbox);
        //screen.append(box);
        
      // Focus our element. 
        lgbox.focus();
    
    
    
    
    // --------------------- END LOGIN
    
    
    
    
   exports.loginBox = lgbox; 
       
    // Render the screen. 
    screen.render();
    
} // end of init


function main(at){
    
    
    var titlebox = blessed.box({
        top: 'left',
        left: 'left',
        width: '100%',
        height: '10%',
        content: 'Hello {bold}Gino{/bold}! '+at,
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
    
    
    
}




exports.uiInit = ui_init;
exports.main = main;
