import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-currentchat',
  templateUrl: './currentchat.component.html',
  styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    message:string;
    allMessages:any;
    constructor(private chat:ChatService) {
        this.message = "";
        this.getMessages();
    }

    ngOnInit() {

    }
    sendMsg(event:any){
        if(event.keyCode == 13){
            console.log(this.message);
            let msg = {roomName: "lobby", msg: this.message};
            this.chat.sendMessage(msg);
            this.message = "";
        }
    }
    getMessages(){
        this.chat.getMessages().subscribe(
            messages => this.allMessages = messages['msgHistory']
        );
    }

}
