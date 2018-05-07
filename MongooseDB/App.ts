import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    
    // router.get('/', (req, res, next) => {
    //   res.json({
    //     message: 'Hello World!'
    //   });
    // });

    //THESE ARE ALL REQUESTS MADE TO THE SERVER (FROM CLIENT)

    //making route for "one"
    router.get('/one', (req, res, next) => {
        res.send('request one');
    });

    // making route for "add"
    router.get('/add', (req, res, next) => {
        let urlParts:any = url.parse(req.url, true);
        let query:any = urlParts.query;

        //query is a json object that has all the parameters from the URL
        //http://localhost:8080/add?var1=1&var2=2
        //Everything after ? above is a parameter: var1 = 1, var2 = 2
        console.log('var1:' + query.var1); 
        console.log('var2:' + query.var2);

         //parseInt: turn it into an int because when user 
         //types it in it is a string
         let value1: number = parseInt(query.var1);
         let value2: number = parseInt(query.var2);
         let sum: number = value1 + value2;
        
        //var sum = query.var1 + query.var2;
        var msg = 'addition of ' + query.var1 + ' plus ' + query.var2 + ' equals ' + sum;
        //print message onto the page
        console.log(msg);

        res.send(msg);
    });

    let fname2;

    router.param('fname', (req, res, next, value) => {
        console.log('The param value is: ' + value);

        fname2 = value + "-ABC";

        next();
    });

    router.get('/name/:fname', (req, res, next) => {
        let name:string; //declare String name

	    console.log(':fname = ' + req.params.fname);

        if (req.params.fname === 'israelh') {
            name = fname2 + ' hilerio';
        }
        else {
            name = fname2 + ' world';
        }

        console.log(name);

        res.send("Your name is: "  + name);
    });

   

    this.express.use('/', router);
    // Send them to the images folder
    this.express.use('/images', express.static(__dirname+'/img'));
    // Send them to index.html by default 
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export {App};
