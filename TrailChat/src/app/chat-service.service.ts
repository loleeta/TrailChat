import {Injectable, EventEmitter, Input } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //chats: ChatModel[] = [];

  constructor(private http: HttpClient) {
  }

  getChats() {

    return this.http.get('http://localhost:8080/chats').pipe(
      // map((response:any) => {
      //   return response.json;
      // }));
      catchError(error => {
        console.log('Error in chat service');
        console.log(error);
        return of(null);
      }));

  }

}

