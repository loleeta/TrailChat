import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-route';
import { Navitem1Component } from './navitem1/navitem1.component';
import { Navitem2Component } from './navitem2/navitem2.component';
import { ChatmenuComponent } from './chatmenu/chatmenu.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { LinksComponent } from './links/links.component';
import { MymessageComponent } from './mymessage/mymessage.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    Navitem1Component,
    Navitem2Component,
    ChatmenuComponent,
    ChatwindowComponent,
    LinksComponent,
    MymessageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
