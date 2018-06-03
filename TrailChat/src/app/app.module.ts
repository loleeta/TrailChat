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
<<<<<<< HEAD
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
=======
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
>>>>>>> 9c21900e2c14daa900a2976f3b3f2b6aa4c749d3

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    Navitem1Component,
    Navitem2Component,
    ChatmenuComponent,
<<<<<<< HEAD
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent
=======
    ChatwindowComponent,
>>>>>>> 9c21900e2c14daa900a2976f3b3f2b6aa4c749d3
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
