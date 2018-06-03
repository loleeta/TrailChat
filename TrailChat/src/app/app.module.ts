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
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    Navitem1Component,
    Navitem2Component,
    ChatmenuComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent
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
