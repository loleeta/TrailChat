# TrailChat
Implements a public group chat with a searchable link history as SaaS


## How To Run
instructions for running:

//to start the MongoDB server
cd into the MongooseDB folder:
>> md db or ($mkdir db, if on mac)

>> start.toDoSample.cmd ($ mongod -port 3001) 

if this is the first time running, open up another command prompt and go into the MongooseDB folder:
>> mongo --port 3001 (open mongo client)

>> load ('createDB/createAdminUser.js'); (to create users in database)

>> load ('createDB/trailChatData.js'); (to enter our data in)

in another command prompt in the MongooseDB folder:
>> npm install (to install dependencies)

>> tsc AppServer.ts (to compile)

>> node AppServer.js (to run)

go to http://localhost:8080/
