import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ChatInterface} from '../interfaces/ChatInterface';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ChatModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                chatName: String,
                chatID: Number
            }, {collection: 'chats'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ChatInterface>("Chats", this.schema);
    }

    public retrieveAllLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {ChatModel};