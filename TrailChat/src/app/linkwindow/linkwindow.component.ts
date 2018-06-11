import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../MongooseDB/model/message';
import { ChatModel } from '../../../../MongooseDB/model/ChatModel';
import { MessageService } from '../message.service';

@Component({
  selector: 'linkwindow',
  templateUrl: './linkwindow.component.html',
  styleUrls: ['./linkwindow.component.css']
})
export class LinkwindowComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  //CHANGES BEING MADE HERE
  //Get links from particular chat room

  getLinks(chatID) {
    console.log('calling REST API: getMessages()');
    this.msgService.getLinks(this.chat_id)

      //.subscribe(chatData => {
        //this.updateMsg(chatData);
      });
    console.log('Request was made, waiting for results..');
  }
  }


  ngOnInit() {
  }

}
