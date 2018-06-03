import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({

  selector: 'app-message-input',
  templateUrl: './message-input.component.html',


})

export class MessageInputComponent{

  constructor(private messageService: MessageService){}

  // onSubmit(value: string){
  //   //console.log(value);
  //   var time= new Date();
  //   const message =  new Message(value,'Tong',time);
  //   this.messageService.addMessage(message);
  // }

  // message: Message;
  //
  // constructor(private messageService: MessageService){}
  //
  onSubmit(form:NgForm){

    //console.log(form);
    var time= new Date();
    const message =  new Message(form.value.content,'Tong',time);
    this.messageService.addMessage(message);
    // if(this.message){
    //   // Edit
    //   this.message.content = form.value.content;
    //   this.messageService.updateMessage(this.message)
    //                     .subscribe(
    //                       result => console.log(result)
    //                     );
    //   this.message = null;
    // }
    //
    // else{
    //   // Create
    //   const message = new Message(form.value.content, 'Max');
    //   this.messageService.addMessage(message)
    //       .subscribe(,
    //         data => console.log(data),
    //         erro => console.error(error)
    //       );
    // }
    form.resetForm();
  }
  //
  // onClear(form: NgForm){
  //   this.message = null;
  //   form.resetForm();
  // }
  //
  // ngOnInit(){
  //   this.messageService.messageIsEdit.subscribe(
  //     (message:Message)=> this.message = message
  //   );
  // }
}
