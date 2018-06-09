"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var ChatModel_1 = require("./model/ChatModel");
var UserModel_1 = require("./model/UserModel");
var MessageModel_1 = require("./model/MessageModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Chat = new ChatModel_1.ChatModel();
        this.User = new UserModel_1.UserModel();
        this.Message = new MessageModel_1.MessageModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        //route to return JSON of chat objects
        router.get('/chats', function (req, res) {
            console.log("Query all chats");
            _this.Chat.retrieveAllChats(res);
        });
        //route to return a unique chat based on ID
        router.get('/chats/:chatID', function (req, res) {
            var id = req.params.chatID;
            console.log("Query a user with id:" + id);
            _this.Chat.retrieveChat(res, { chatID: id });
        });
        //route to return JSON of all users
        router.get('/users', function (req, res) {
            console.log("Query all users");
            _this.User.retrieveAllUsers(res);
        });
        //route to return JSON of a single user
        router.get('/users/:userID', function (req, res) {
            var id = req.params.userID;
            console.log("Query a user with id:" + id);
            _this.User.retrieveUser(res, { userID: id });
        });
        //route to return JSON of messages by chat
        router.get('/messages/:chat_id', function (req, res) {
            var id = req.params.chat_id;
            console.log("Query messages from chat:" + id);
            _this.Message.retrieveAllMessages(res, { chat_id: id });
        });
        //route to return JSON of all users
        router.get('/messages', function (req, res) {
            console.log("Query all messages");
            _this.Message.retrieveAll(res);
        });
        /*
        router.post('/:chatid', (req, res) => {
            console.log("Sending messages from chat to db" + id);
            this.Message.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });

        });
        */
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages/'));
    };
    return App;
}());
exports.App = App;
