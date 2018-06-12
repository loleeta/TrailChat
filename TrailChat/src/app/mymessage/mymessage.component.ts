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
  selector: 'mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.css']
})

export class MymessageComponent implements OnInit {
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

  // save retrieved data to property of this component
  updateMsg(data) {
    console.log('Updating chats with:');
    console.log(data);

    this.chatMsgs = data;

    // const chatNames = data.map(chat => chat.chatName);
    // let transformedMessages: Message[] = [];
    //
    // for(let message of data){
    //   if(message.user_id === 108749110378770000000)
    //     transformedMessages.push(message);

      //autolinker.link( text );
        //message.content =   getUrls(text)[0];
        // var it = getUrls(text).values();
        // var first = it.next();
        // var value = first.value;
        //
        // let messageMod: Message = {
        //   message_id: message.message_id,
        //   message_time: message.message_time,
        //   message_type: message.message_type,
        //   message_content: value,
        //   user_id: message.user_id,
        //   chat_id: message.chat_id
        // };




    // const chatNames = data.map(chat => chat.chatName);
    //this.chatMsgs = transformedMessages;
    // this.firstChat = this.chats[0];
    // console.log('First item in array ' + this.firstChat);
  }

  // retrieve data from Express Server using message service
  getChatMessages(): void {
    console.log('calling REST API: getMessages()');

    this.msgService.getMyMessages(this.chat_id)
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
