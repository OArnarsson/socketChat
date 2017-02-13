import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-currentchat',
  templateUrl: './currentchat.component.html',
  styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    message:string;
    allMessages:string[];
    oldLength:number;
    @Input() activeRoom:string;
    constructor(private chat:ChatService) {
        this.message = "";
        this.getMessages();
        this.allMessages = [];
        this.oldLength = 0;
    }

    ngOnInit() {

    }
    sendMsg(event:any){
        if(event.keyCode == 13 || event == 'sendButton'){
            let msg = {roomName: this.activeRoom, msg: this.message};
            this.chat.sendMessage(msg);
            this.message = "";
        }
    }
    getMessages(){
        this.chat.getMessages().subscribe(
            messages => {
                this.oldLength = this.allMessages.length;
                this.allMessages = messages['msgHistory'];
            }
        );
    }

}
