var blessed = require('blessed');

 //   function loginBox() {
 
//}        

// NOte 13.11.2015 // Think about creating a config file specific to the u with colors and share styles

function init(){

    // Create a screen object. 
    /*
    screen = blessed.screen({
      smartCSR: true
    });
    */
    
    screen = blessed.screen({
      dump: __dirname + '/logs/shadow.log',
      smartCSR: true,
      dockBorders: true,
      warnings: true
    });
    
    
    
    screen.title = 'fb commander 0.001';
 
    // Quit on Escape, q, or Control-C. 
    screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    });
    
    
    

    //screen.render();
    
} // end of init


function main(){


		// -------------------- MAIN
      var mainbox = blessed.box({
	    parent: screen,
      top: 'left',
      left: 'left',
      width: '100%',
      height: '100%',
      align: 'center',
      content: '...MAIN...',
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
        
      }
    });
    
      
    
    
    
    var titlebox = blessed.box({
		parent: screen,
        top: 'left',
        left: 'left',
        width: '95%',
        height: '7%',
        shadow: true,
        content: 'Hello darkness my old friend..',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'cyan',
            bg: 'blue',
            
            border: {
            fg: 'cyan',
            style:'bold'
            },
            
            //hover: {
            //bg: 'green'
            
            //}
            
        }
    }); 
    
    var feedbox = blessed.list({
		parent: screen,
        title: 'Your Wall',
        top: '80',
        left: 'left',
        width: '40%',
        height: '85%',
        tags: true,
        border: {
            type: 'line'
        },
        style: {
            fg: 'cyan',
            bg: 'blue',
            border: {
            fg: 'cyan',
            style:'bold'
            },
        },
        //items: ['a','b'],
    shadow:true,
		keys: true,
		vi: true,
		mouse: true,
		//border: 'line',
		scrollbar: {
		ch: ' ',
		track: {
		bg: 'cyan'
		},
    /*
		style: {
		inverse: true
		}
    */
		},
        
    }); 
 
var bg = blessed.box({
    parent: screen,
    shadow: true,
    left: 0,
    top: 0,
    right: 0,
    bottom: 4,
    style: {
    bg: 'lightblue',
    fg: 'cyan',
    },
    content: 'Foo'
});

var under = blessed.box({
parent: screen,
shadow: true,
left: 10,
top: 4,
width: '40%',
height: '30%',
style: {
bg: 'yellow'
},
border: 'line',
tags: true
});

// Botto bar *******************************************
var auto = true;

var box = blessed.box({
parent: screen,
top: 0,
right: 0,
width: 'shrink',
height: 'shrink',
content: '...'
});


var bar = blessed.listbar({
        //parent: screen,
        bottom: 0,
        left: 0,
        right: 0,
        height: auto ? 'shrink' : 3,
        mouse: true,
        keys: true,
        autoCommandKeys: true,
        //border: 'line',
        vi: true,
        //shadow: true,
        style: {
        bg: 'black',
        item: {
        bg: 'cyan',
        fg: 'black',
        hover: {
        bg: 'red'
        },
        //focus: {
        // bg: 'blue'
        //}
        },
        selected: {
        bg: 'blue'
        }
        },
        commands: {
        'one': {
        keys: ['a'],
        callback: function() {
        box.setContent('Pressed one.');
        screen.render();
        }
        },
        'two': function() {
        box.setContent('Pressed two.');
        screen.render();
        },
        'three': function() {
        box.setContent('Pressed three.');
        screen.render();
        },
        'four': function() {
        box.setContent('Pressed four.');
        screen.render();
        },
        'five': function() {
        box.setContent('Pressed five.');
        screen.render();
        },
        'six': function() {
        box.setContent('Pressed six.');
        screen.render();
        },
        'seven': function() {
        box.setContent('Pressed seven.');
        screen.render();
        },
        'eight': function() {
        box.setContent('Pressed eight.');
        screen.render();
        },
        'nine': function() {
        box.setContent('Pressed nine.');
        screen.render();
        },
        'ten': function() {
        box.setContent('Pressed ten.');
        screen.render();
        },
        'eleven': function() {
        box.setContent('Pressed eleven.');
        screen.render();
        },
        'twelve': function() {
        box.setContent('Pressed twelve.');
        screen.render();
        },
        'thirteen': function() {
        box.setContent('Pressed thirteen.');
        screen.render();
        },
        'fourteen': function() {
        box.setContent('Pressed fourteen.');
        screen.render();
        },
        'fifteen': function() {
        box.setContent('Pressed fifteen.');
        screen.render();
        }
        }
        });




    exports.titlebox = titlebox; 
    exports.feedbox = feedbox;
    
    var bgtext;
    var i;
    for (i=0;i<5000;i++){
      bgtext += '** fbcommander **';
    }
    bg.setContent(bgtext);
    
	//screen.append(mainbox)
    screen.append(bg)
    screen.append(titlebox);
    screen.append(feedbox);
    //screen.append(under);
    screen.append(bar);
    screen.append(box);
    bar.focus();
    screen.render();
    
    
}




exports.init = init;
exports.main = main;

init();
main();
