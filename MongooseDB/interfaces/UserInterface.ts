import Mongoose = require("mongoose");

interface UserInterface extends Mongoose.Document {
    user_id: number;
    user_name: string;
    user_email: string;
    user_ps: string;
}
export {UserInterface};