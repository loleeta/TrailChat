
declare var require: any


import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import {Observable} from "rxjs/index";
import { SocketService } from '../socket.service';
import { Message } from '../../../../MongooseDB/model/message'

import * as io from 'socket.io-client';

const urlRegex = require('url-regex');
const Autolinker = require('autolinker');
const getUrls = require('get-urls');

const SERVER_URL = 'http://localhost:8080';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

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

    let transformedMessages: Message[] = [];
    var autolinker = new Autolinker( { newWindow: false, truncate: 25 } );

    for(let message of data){

      var text = message.message_content;
      console.log(text);
      console.log(getUrls(text));
      //getUrls(text)


      if(urlRegex().test(text)){
        console.log("heihei");


      //autolinker.link( text );
        //message.content =   getUrls(text)[0];
        var it = getUrls(text).values();
        var first = it.next();
        var value = first.value;

        let messageMod: Message = {
          message_id: message.message_id,
          message_time: message.message_time,
          message_type: message.message_type,
          message_content: value,
          user_id: message.user_id,
          chat_id: message.chat_id
        };

        transformedMessages.push(messageMod);
      }
    }

    // const chatNames = data.map(chat => chat.chatName);
    this.chatMsgs = transformedMessages;
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
