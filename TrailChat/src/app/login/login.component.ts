import { Component, OnInit } from '@angular/core';
import { ChatmenuComponent } from "../chatmenu/chatmenu.component";
import {ActivatedRoute, Router} from "@angular/router";
import { ChatService } from '../chat-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private route: ActivatedRoute;
  private service: ChatService;
  show: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log("Clicked");
  }

}
