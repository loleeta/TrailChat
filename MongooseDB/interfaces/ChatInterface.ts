import Mongoose = require("mongoose");

interface ChatInterface extends Mongoose.Document {
    chatID: number;
    chatName: string;
}
export {ChatInterface};
