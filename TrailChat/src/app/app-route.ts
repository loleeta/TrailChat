import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {ChatmenuComponent} from "./chatmenu/chatmenu.component";
import { MessagesComponent } from "./messages/messages.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {path: 'messages', component: MessagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chatmenu', component: ChatmenuComponent }


];

export const routing = RouterModule.forRoot(routes);
