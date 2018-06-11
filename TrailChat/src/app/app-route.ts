import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ChatmenuComponent } from './chatmenu/chatmenu.component';
import { ChatwindowComponent} from './chatwindow/chatwindow.component';
import { LinkwindowComponent } from './linkwindow/linkwindow.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chatmenu', component: ChatmenuComponent },
  { path: 'chatwindow', component: ChatwindowComponent},
  { path: 'linkwindow', component: LinkwindowComponent}


];

export const routing = RouterModule.forRoot(routes);
