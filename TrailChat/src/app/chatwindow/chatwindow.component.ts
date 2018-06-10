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
  @Input() chatName: string;
  @Input() chatID: number;
  messageContent: string;
  ioConnection: any;

  constructor(private msgService: MessageService, private SocketService: SocketService) {
  }

  private initIoConnection(): void {
    this.SocketService.initSocket(this.chatID);

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

  public sendMessage(text: string): void {
    if (!text) {
      return;
    }

    let messageTest: Message = {
      message_id: 1,
      message_time: new Date(),
      message_type: 'test',
      message_content: text,
      user_id: 1,
      chat_id: this.chatID
    };

    this.SocketService.send(messageTest);
    // this.messageContent = null;
    this.msgService.addMessage(messageTest);
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
    this.msgService.getMessages(this.chatID)
      .subscribe(chatData => {
        this.updateMsg(chatData);
      });
    console.log('Request was made, waiting for results..');
  }

  selectChatRoom(chat) {
    console.log("on selectChatRoom " + chat.chatName);
    this.chatID = chat.chatID;
    this.chatName = chat.chatName;
    this.SocketService.joinRoom(chat.chatID);
    this.getChatMessages();
  }


  ngOnInit(): void {
    this.initIoConnection();
  }
}
