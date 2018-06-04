import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})

export class ChatwindowComponent implements OnInit {
  chatMsgs: any;
  @Input() chatName: string;
  @Input() chatID: number;

  constructor(private msgService: MessageService) {
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
    this.chatMsgs = this.msgService.getMessages(this.chatID)
      .subscribe(chatData => {
        this.updateMsg(chatData);
      });
    console.log('Request was made, waiting for results..');
  }

  selectChatRoom(chat) {
    console.log("on selectChatRoom " + chat.chatName);
    this.chatID = chat.chatID;
    this.chatName = chat.chatName;
    this.getChatMessages();
  }


  ngOnInit() {
  }

}
