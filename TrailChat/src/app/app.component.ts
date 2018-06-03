import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrailChat';
}
