"use strict";
exports.__esModule = true;

var GooglePassport_1 = require("./GooglePassport");
var passport = require('passport');

var socketIo = require("socket.io");
var socketIOServer = /** @class */ (function () {
    function socketIOServer(server, MessageService) {
        this.sockets(server);
        this.config();
        this.listen();
        this.messageService = MessageService;
        this.googlePassportObj = new GooglePassport_1["default"]();
    }
    socketIOServer.prototype.sockets = function (server) {
        this.io = socketIo(server);
    };
    socketIOServer.prototype.config = function () {
        this.port = process.env.PORT || socketIOServer.PORT;
    };
    socketIOServer.prototype.listen = function () {
        var _this = this;
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            socket.on('message', function (m) {
                //var message = JSON.stringify(m);
                //m.message_type = googlePassportObj.displayName;


                // modify the user name
                //console.log(_this.googlePassportObj);
                //m.message_content = _this.googlePassportObj.displayName;
                m.message_type = _this.googlePassportObj.displayName;
                m.user_id = _this.googlePassportObj.userId;
                console.log('[server](message): %s', JSON.stringify(m));
                _this.messageService.addMessage(m);
                // this function sends a message to a particular chatroom
                _this.io.to(m.chat_id.toString()).emit('message', m);
                // look at which chat room they are sending the message to
                // then broadcast it to those people
            });
            // Join a new chat room
            socket.on('changeRoom', function (data) {
                socket.leave(data.oldChatID.toString());
                socket.join(data.newChatID.toString());
                console.log('Client joined new room ' + data.newChatID);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    socketIOServer.PORT = 8080;
    return socketIOServer;
}());
exports.socketIOServer = socketIOServer;
