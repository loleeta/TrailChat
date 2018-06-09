import { Server } from 'http';
import * as socketIo from 'socket.io';
import { Message } from './model/message';

export class socketIOServer {
  public static readonly PORT: number = 8080;
  private io: socketIo.Server;
  private port: string | number;

  constructor(server: Server) {
    this.sockets(server);
    this.config();
    this.listen();
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
        console.log('[server](message): %s', JSON.stringify(m));

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


