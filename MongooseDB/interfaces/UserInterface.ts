import Mongoose = require("mongoose");

interface UserInterface extends Mongoose.Document {
    userID: number;
    userName: string;
    userEmail: string;
    userPS: string;
}
export {UserInterface};