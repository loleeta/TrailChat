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

        router.get('/login', (req, res, next) => {
            console.log("Login page");

        });

        router.post('/app/list/', (req, res) => {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = this.idGenerator;
            this.Lists.model.create([jsonObj], (err) => {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(this.idGenerator.toString());
            this.idGenerator++;
        });

        //after user has successfully logged, in, should point to this page
        router.get('/lobby', (req, res, next) => {
            console.log("Query all chats");

        });


        this.expressApp.use('/', router);

        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages'));

    }

}

export {App};