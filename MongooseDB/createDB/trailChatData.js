db = db.getSiblingDB('trailSample')
db.createCollection('chats')
chatC = db.getCollection("chats")
chatC.remove({})
chatC.insert(
    {
        chat_name: "cat chat",
        chat_id: 1
    }
)
chatC.insert(
    {
        chat_name: "car chat",
        chat_id: 2
    }
)
chatC.insert(
    {
        chat_name: "dev chat",
        chat_id: 3
    }
)
db.createCollection('users')
userC = db.getCollection("users")
userC.remove({})
userC.insert(
    {
        user_id: 1,
        user_name: "lolita",
        user_email: "lolita@lolita.com",
        user_ps: "lam"
    }
)

userC.insert(
    {
        user_id: 2,
        user_name: "christine",
        user_email: "christine@christine.com",
        user_ps: "lew"
    }
)

userC.insert(
    {
        user_id: 3,
        user_name: "tong",
        user_email: "tong@tong.com",
        user_ps: "xu"
    }
)