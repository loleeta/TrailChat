db = db.getSiblingDB('trailSample')
db.createCollection('messages')
msgC = db.getCollection("messages")

//msg has message_id, message_time, message_type, message_content user_id, chat_id
//user has user_id, user_name, user_email, user_ps
msgC.insert(
    {
        message_id: 1,
        message_time: Date.now(),
        message_type: "message",
        message_content: "Hello from Lolita",
        user_id: 1,
        chat_id: 1
    }
)
msgC.insert(
    {
        message_id: 2,
        message_time: Date.now(),
        message_type: "message",
        message_content: "Hello from Christine",
        user_id: 2,
        chat_id: 1
    }
)
msgC.insert(
    {
        message_id: 3,
        message_time: Date.now(),
        message_type: "message",
        message_content: "Hello from Tong",
        user_id: 3,
        chat_id: 1
    }
)