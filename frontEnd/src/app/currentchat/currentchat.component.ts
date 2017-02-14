import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ChatService } from '../chat.service'
import {Chatroom} from "./chatroom";

@Component({
  selector: 'app-currentchat',
  templateUrl: './currentchat.component.html',
  styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    message:string;
    chatRooms:Chatroom[];
    @Input() activeRoom:string;
    constructor(private chat:ChatService) {
        this.message = "";
        this.getMessages();
        this.chatRooms = [];
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
            chatRoom => {
                let isNew = true;
                for(let index in this.chatRooms){
                    if(this.chatRooms[index].name == chatRoom['name']){
                        this.chatRooms[index] = chatRoom;
                        isNew = false;
                        //This need some more work.
                        if(this.chatRooms[index].name == this.activeRoom){
                            this.chatRooms[index].unreadMessages = 0;
                        }
                        else{
                            this.chatRooms[index].unreadMessages +=1;
                        }
                    }
                }
                if(isNew){
                    this.chatRooms.push(chatRoom);
                }
            }
        );
    }
    getUnreadMessages(){
        let size:number;
        for(let room of this.chatRooms){
            if(room.name == this.activeRoom){
                size = room.history.length - room.unreadMessages;
            }
        }
        console.log("this is the size:" + size);
        return size;
    }

    getActiveRoomChat(){
        for(let room of this.chatRooms){
            if(room.name == this.activeRoom){
                return room.history;
            }
        }
        return [];
    }

}
