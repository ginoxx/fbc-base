var blessed = require('blessed');
 
// Create a screen object. 
var screen = blessed.screen({
  smartCSR: true
});
 
screen.title = 'my window title';
 
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
 
 
// Create a box perfectly centered horizontally and vertically. 
var box = blessed.box({
  top: '100',
  left: 'left',
  width: '50%',
  height: '90%',
  content: 'Hello {bold}Gino{/bold}!',
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
screen.append(titlebox);
screen.append(box);
 
// Add a png icon to the box 
var icon = blessed.image({
  parent: box,
  top: 0,
  left: 0,
  type: 'overlay',
  width: 'shrink',
  height: 'shrink',
  file: __dirname + '/my-program-icon.png',
  search: false
});
 
// If our box is clicked, change the content. 
box.on('click', function(data) {
  box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
  screen.render();
});
 
// If box is focused, handle `enter`/`return` and give us some more content. 
box.key('enter', function(ch, key) {
  box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});
 
// Quit on Escape, q, or Control-C. 
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});
 
// Focus our element. 
box.focus();
 
// Render the screen. 
screen.render();