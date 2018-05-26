import Mongoose = require("mongoose");

interface MessageInterface extends Mongoose.Document {
    messageID: number;
    messageTime: string;
    messageType: string;
    messageContent: string;
    user_id: number;
    chat_id: number;
}
export {MessageInterface};
