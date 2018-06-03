import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  selector: 'app-message-list',
  template: `
    <div class = "col-md-8 col-md-offset-2">
      <app-message
                 [inputMessage]="message"

                  *ngFor="let message of messages"></app-message>


    </div>
  `
})

export class MessageListComponent implements OnInit{
  // = [
  //   new Message('Somdad','Max', new Date(),'1','1','1'),
  //   new Message('huzi','Max', new Date(),'1','1','1'),
  //   new Message('ruirui','Max', new Date(),'1','1','1')
  // ]
  messages: Message[];

  constructor(private messageService: MessageService){

  }

  ngOnInit(){
    this.messages = this.messageService.getMessage();
    // this.messageService.getMessages()
    //                 .subscribe(
    //                   (messages: Message[]) => {
    //                     this.messages = messages;
    //                   }
    //                 );
  }
}
