import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'chatmenu',
  templateUrl: './chatmenu.component.html',
  styleUrls: ['./chatmenu.component.css']
})
export class ChatmenuComponent implements OnInit {
  chats: any;
  firstChat: any;
  @Input() chatNumber: number[] = [1, 2, 3];
  chatID: string;
  chatName: string;

  constructor(private chatService: ChatService) {

  }

  updateChats(data) {
    console.log('Updating chats with:');
    console.log(data);

    const chatNames = data.map(chat => chat.chatName);
    this.chats = chatNames;
    this.firstChat = this.chats[0];
    console.log('First item in array ' + this.firstChat);
  }

  getChats(): void {
    console.log('calling REST API: getchats()');
    this.chats = this.chatService.getChats()
      .subscribe(chatData => {
        this.updateChats(chatData);
      });
    console.log('Request was made, waiting for results..');
  }

  ngOnInit() {
    this.getChats();

  }

}
