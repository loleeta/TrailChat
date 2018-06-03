import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';


import {ChatModel} from './model/ChatModel';
import {UserModel} from './model/UserModel';
import {MessageModel} from './model/MessageModel';
import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public expressApp: express.Application;
    public Chat:ChatModel;
    public User:UserModel;
    public Message:MessageModel;
    public idGenerator:number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Chat = new ChatModel();
        this.User = new UserModel();
        this.Message = new MessageModel();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        router.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        //route to return JSON of chat objects
        router.get('/chats', (req, res) => {
            console.log("Query all chats");
            this.Chat.retrieveAllChats(res);
        });

        //route to return a unique chat based on ID
        router.get('/chats/:chatID', (req, res) => {
            var id = req.params.chatID;
            console.log("Query a user with id:" + id);
            this.Chat.retrieveChat(res, {chatID: id});
        });

        //route to return JSON of all users
        router.get('/users', (req, res) => {
            console.log("Query all users");
            this.User.retrieveAllUsers(res);
        });

        //route to return JSON of a single user
        router.get('/users/:userID', (req, res) => {
            var id = req.params.userID;
            console.log("Query a user with id:" + id);
            this.User.retrieveUser(res, {userID: id});
        });

        //route to return JSON of messages by chat
        router.get('/messages/:chat_id', (req, res) => {
            var id = req.params.chat_id;
            console.log("Query messages from chat:" + id);
            this.Message.retrieveAllMessages(res, {chat_id: id});
        });

        //route to return JSON of all users
        router.get('/messages', (req, res) => {
            console.log("Query all messages");
            this.Message.retrieveAll(res);
        });


        this.expressApp.use('/', router);

        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages/'));

    }

}

export {App};