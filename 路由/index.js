var server = require("./server");
var a = require("./router");
server.start(a.router)