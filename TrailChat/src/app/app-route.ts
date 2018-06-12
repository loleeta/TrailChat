import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ChatmenuComponent } from './chatmenu/chatmenu.component';
import { ChatwindowComponent} from './chatwindow/chatwindow.component';
import { LinksComponent} from './links/links.component';
import { MymessageComponent} from './mymessage/mymessage.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'links', component: LinksComponent },
  { path: 'chatmenu', component: ChatmenuComponent },
  { path: 'mymsg', component: MymessageComponent },
  { path: 'chatwindow', component: ChatwindowComponent}


];

export const routing = RouterModule.forRoot(routes,{useHash:true});
