import { Injectable } from '@angular/core';
import { Message } from "../../../MongooseDB/model/message";
import { Observable } from "rxjs/index";
//import { Observer } from 'rxjs/Observer';

import * as socketIo from 'socket.io-client';
const SERVER_URL = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private currentChat;

  public initSocket(chatID): void {
    this.socket = socketIo(SERVER_URL);
    this.currentChat = 1;

    this.socket.on('connection', function(socket){
      socket.join(chatID);
    });
}

  constructor() {
  }

  //sends a message to server
  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  //
  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

  public joinRoom(newChatID){
    this.socket.emit('changeRoom', {newChatID: newChatID, oldChatID: this.currentChat});
    this.currentChat = newChatID;
  }
}
