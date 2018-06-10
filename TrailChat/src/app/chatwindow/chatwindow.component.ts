import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import {Observable} from "rxjs/index";
import { SocketService } from '../socket.service';
import { Message } from '../../../../MongooseDB/model/message'

import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:8080';

@Component({
  selector: 'chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})

export class ChatwindowComponent implements OnInit {
  chatMsgs: Message[] = [];
  @Input() chat_name: string;
  @Input() chat_id: number;
  messageContent: string;
  ioConnection: any;

  constructor(private msgService: MessageService, private SocketService: SocketService) {
  }

  private initIoConnection(): void {
    this.chat_id = 1;
    this.SocketService.initSocket(this.chat_id);

    this.ioConnection = this.SocketService.onMessage()
      .subscribe((message: Message) => {
        this.chatMsgs.push(message);
      });

    /*
    this.SocketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.SocketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
    */
  }

  public sendMessage(): void {
    var input = <HTMLInputElement> document.getElementById("message-input");
    if (!input) {
      return;
    }

    let messageTest: Message = {
      message_id: 1,
      message_time: new Date(),
      message_type: 'test',
      message_content: input.value,
      user_id: 1,
      chat_id: this.chat_id
    };

    this.SocketService.send(messageTest);
   // this.msgService.addMessage(messageTest);
    input.value = null;
  }

  // save retrieved data to property of this component
  updateMsg(data) {
    console.log('Updating chats with:');
    console.log(data);

    // const chatNames = data.map(chat => chat.chatName);
    this.chatMsgs = data;
    // this.firstChat = this.chats[0];
    // console.log('First item in array ' + this.firstChat);
  }

  // retrieve data from Express Server using message service
  getChatMessages(): void {
    console.log('calling REST API: getMessages()');
    this.msgService.getMessages(this.chat_id)
      .subscribe(chatData => {
        this.updateMsg(chatData);
      });
    console.log('Request was made, waiting for results..');
  }

  selectChatRoom(chat) {
    console.log("on selectChatRoom " + chat.chat_name);
    this.chat_id = chat.chat_id;
    this.chat_name = chat.chat_name;
    this.SocketService.joinRoom(chat.chat_id);
    this.getChatMessages();
  }


  ngOnInit(): void {
    this.initIoConnection();
  }
}
