import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {UserInterface} from '../interfaces/UserInterface';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: Number,
                userName: String,
                userEmail: String,
                userPS: String
            }, {collection: 'users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<UserInterface>("Users", this.schema);
    }

    public retrieveAllLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {UserModel};