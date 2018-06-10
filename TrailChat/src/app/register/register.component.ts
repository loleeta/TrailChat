import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import {Observable} from "rxjs/index";
import { SocketService } from '../socket.service';
import { Message } from '../../../../MongooseDB/model/message'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
