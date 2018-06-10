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
                user_id: Number,
                user_name: String,
                user_email: String,
                user_ps: String
            }, {collection: 'users'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<UserInterface>("Users", this.schema);
    }

    public retrieveAllUsers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveUser(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec ( (err, item) => {
            response.json(item);
        })
    }
}
export {UserModel};