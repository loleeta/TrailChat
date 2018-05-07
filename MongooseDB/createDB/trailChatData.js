db = db.getSiblingDB('trailSample')
db.createCollection('chats')
chatC = db.getCollection("chats")
chatC.remove({})
chatC.insert(
    {
        chatName: "cat chat",
        chatID: 1
    }
)
chatC.insert(
    {
        chatName: "car chat",
        chatID: 2
    }
)
chatC.insert(
    {
        chatName: "dev chat",
        chatID: 3
    }
)
db.createCollection('users')
userC = db.getCollection("users")
userC.remove({})
userC.insert(
    {
        userID: 1,
        userName: "lolita",
        userEmail: "lolita@lolita.com",
        userPS: "lam"
    }
)

userC.insert(
    {
        userID: 2,
        userName: "christine",
        userEmail: "christine@christine.com",
        userPS: "lew"
    }
)

userC.insert(
    {
        userID: 3,
        userName: "tong",
        userEmail: "tong@tong.com",
        userPS: "xu"
    }
)