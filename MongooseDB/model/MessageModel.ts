import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {MessageInterface} from '../interfaces/MessageInterface';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class MessageModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                message_id: Number,
                message_time: Date,
                message_type: String,
                message_content: String,
                user_id: Number,
                chat_id: Number
            }, {collection: 'messages'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<MessageInterface>("Messages", this.schema);
    }

    public addMessage(message): void {
        console.log('testing to see if message was added to database');
        console.log(message);
        //var query =
        this.model.create(message);
        //query.exec();
    }

    public retrieveAllMessages(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });

    }

    public retrieveAll(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveChat(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec ( (err, item) => {
            response.json(item);
        });
    }

}
export {MessageModel};