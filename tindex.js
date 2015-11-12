var server = require("./server");
var ui = require("./ui");
server.login();
console.log('Login in progress...go tho localhost:3000');
//console.log('wwwW'+server.at);
ui.uiInit();
//ui.loginBox();