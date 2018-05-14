import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {ChatModel} from './model/ChatModel';
import {UserModel} from './model/UserModel';
import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public expressApp: express.Application;
    public Chat:ChatModel;
    public User:UserModel;
    public idGenerator:number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Chat = new ChatModel();
        this.User = new UserModel();
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

        //after user has successfully logged, in, should point to this page
        router.get('/chats', (req, res) => {
            console.log("Query all chats");
            this.Chat.retrieveAllChats(res);
        });

        router.get('/chats/:id')


        this.expressApp.use('/', router);

        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages/'));
        this.expressApp.use('/chats', express.static(__dirname+'/pages/lobby.html'));

    }

}

export {App};