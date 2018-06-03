import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 0%;
    }

    .time{
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 100%;
    }
  `]
})

// function convertUTCDateToLocalDate(date) {
//    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
//
//    var offset = date.getTimezoneOffset() / 60;
//    var hours = date.getHours();
//
//    newDate.setHours(hours - offset);
//    newDate = newDate.getTime();
//    return newDate;
//  };

export class MessageComponent{
  @Input('inputMessage') message: Message;
  @Output() editClicked = new EventEmitter<string>();

  color = 'LightBlue';

  onEdit(){
    //alert('it worked');
    this.editClicked.emit('A new value');
  }
}
