var blessed = require('blessed');

// Create a screen object. 
var screen = blessed.screen({
  smartCSR: true
});
 
screen.title = 'fb commander 0.001';
/*
var titlebox = blessed.box({
  top: 'left',
  left: 'left',
  width: '100%',
  height: '10%',
  content: 'Hello {bold}Gino{/bold}!',
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
*/
 
// Create a box perfectly centered horizontally and vertically. 
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
 
// Append our box to the screen. 
screen.append(lgbox);
//screen.append(box);
 

/*
// If our box is clicked, change the content. 
box.on('click', function(data) {
  box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});
*/

// If box is focused, handle `enter`/`return` and give us some more content. 
lgbox.key('enter', function(ch, key) {
  lgbox.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  lgbox.setLine(1, 'bar');
  lgbox.insertLine(1, 'foo');
  screen.render();
});
 
// Quit on Escape, q, or Control-C. 
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});
 
// Focus our element. 
lgbox.focus();
 
// Render the screen. 
screen.render();