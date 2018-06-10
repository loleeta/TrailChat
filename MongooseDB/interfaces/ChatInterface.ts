import Mongoose = require("mongoose");

interface ChatInterface extends Mongoose.Document {
    chat_id: number;
    chat_name: string;
}
export {ChatInterface};
