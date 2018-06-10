import Mongoose = require("mongoose");

interface MessageInterface extends Mongoose.Document {
    message_id: number;
    message_time: string;
    message_type: string;
    message_content: string;
    user_id: number;
    chat_id: number;
}
export {MessageInterface};
