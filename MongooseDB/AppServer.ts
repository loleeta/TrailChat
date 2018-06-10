import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import { App } from './App';
import { socketIOServer } from './socketIO';

let app: express.Application = new App().expressApp;

let ioServer: any = new socketIOServer(app.listen(8080));