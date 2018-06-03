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
<<<<<<< HEAD
  showVar: boolean = true;
=======
  show: boolean = false;
>>>>>>> 9c21900e2c14daa900a2976f3b3f2b6aa4c749d3

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log("Clicked");
  }

}
