import { Server } from 'http';
import * as socketIo from 'socket.io';
import { Message } from './model/message';
import { MessageModel } from './model/MessageModel';
import { GooglePassport_1 } from './GooglePassport';
import { passport } from 'passport';


export class socketIOServer {
  public static readonly PORT: number = 8080;
  private io: socketIo.Server;
  private port: string | number;
  private messageService: MessageModel;

  constructor(server: Server, MessageService: MessageModel) {
    this.sockets(server);
    this.config();
    this.listen();
    this.messageService = MessageService;
    this.googlePassportObj = new GooglePassport_1["default"]();
  }

  private sockets(server: Server): void {
    this.io = socketIo(server);
  }

  private config(): void {
    this.port = process.env.PORT || socketIOServer.PORT;
  }

  private listen(): void {
    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);

      socket.on('message', (m: Message) => {

        m.message_type = this.googlePassportObj.displayName;
        m.user_id = this.googlePassportObj.userId;

        console.log('[server](message): %s', JSON.stringify(m));

        this.messageService.addMessage(m);

        // this function sends a message to a particular chatroom
        this.io.to(m.chat_id.toString()).emit('message', m);
        // look at which chat room they are sending the message to
        // then broadcast it to those people


      });

      // Join a new chat room
      socket.on('changeRoom', (data: {newChatID: number, oldChatID: number}) => {
        socket.leave(data.oldChatID.toString());
        socket.join(data.newChatID.toString());
        console.log('Client joined new room ' + data.newChatID);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

}
