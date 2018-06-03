export class Message {
  content: string;
  username: string;
  time: Date;
  messageId?: string;
  userId?: string;
  chatId?: string;

  constructor(content:string, username:string,time:Date, messageId?:string,userId?:string,chatId?:string){
    this.content = content;
    this.username = username;
    this.time = time;
    this.messageId = messageId;
    this.userId = userId;
    this.chatId = chatId;
  }

  // constructor(public content:string,
  //             public username:string,
  //             public messageId?:string,
  //             public userId?:string,
  //             public chatId?:string,
  //             public time:string){
  //
  // }




}
