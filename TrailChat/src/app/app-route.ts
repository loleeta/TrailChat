import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import {ChatmenuComponent} from "./chatmenu/chatmenu.component";
import { MessagesComponent } from "./messages/messages.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  {path: 'messages', component: MessagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chatmenu', component: ChatmenuComponent }
=======
import { ChatmenuComponent } from './chatmenu/chatmenu.component';
import { ChatwindowComponent} from './chatwindow/chatwindow.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chatmenu', component: ChatmenuComponent },
  { path: 'msg', component: ChatwindowComponent}
>>>>>>> 9c21900e2c14daa900a2976f3b3f2b6aa4c749d3


];

export const routing = RouterModule.forRoot(routes);
