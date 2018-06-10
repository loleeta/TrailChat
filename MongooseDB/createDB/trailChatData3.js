db = db.getSiblingDB('trailSample')
db.createCollection('messages')
msgC = db.getCollection("messages")

//msg has message_id, message_time, message_type, message_content user_id, chat_id
//user has user_id, user_name, user_email, user_ps
msgC.insert(
    {
        message_id: 4,
        message_time: new Date(),
        message_type: "message",
        message_content: "Meow, this should be the oldest message.",
        user_id: 1,
        chat_id: 1
    }
)
msgC.insert(
    {
        message_id: 5,
        message_time: new Date(),
        message_type: "message",
        message_content: "Meow meow, his should be the next oldest.",
        user_id: 1,
        chat_id: 1
    }
)
msgC.insert(
    {
        message_id: 6,
        message_time: new Date(),
        message_type: "message",
        message_content: "Meow meow meow, this should be the most recent message.",
        user_id: 1,
        chat_id: 1
    }
)
msgC.insert(
    {
        message_id: 7,
        message_time: new Date(),
        message_type: "message",
        message_content: "Beep beep",
        user_id: 1,
        chat_id: 2
    }
)
msgC.insert(
    {
        message_id: 8,
        message_time: new Date(),
        message_type: "message",
        message_content: "Vrooooom",
        user_id: 1,
        chat_id: 2
    }
)
msgC.insert(
    {
        message_id: 9,
        message_time: new Date(),
        message_type: "link",
        message_content: "https://www.kbb.com/",
        user_id: 1,
        chat_id: 2
    }
)
msgC.insert(
    {
        message_id: 10,
        message_time: new Date(),
        message_type: "message",
        message_content: "Buy my used car!",
        user_id: 1,
        chat_id: 2
    }
)