"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var socketIO_1 = require("./socketIO");
var app = new App_1.App().expressApp;
var ioServer = new socketIO_1.socketIOServer(app.listen(8080));
