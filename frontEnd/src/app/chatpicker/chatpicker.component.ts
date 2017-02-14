import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatpicker',
  templateUrl: './chatpicker.component.html',
  styleUrls: ['./chatpicker.component.sass']
})
export class ChatpickerComponent implements OnInit {
    availableRooms: string[];
    constructor(private chat:ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
    }

    ngOnInit() {
    }

    getAllRooms(){
        this.chat.getAllRooms().subscribe(
            data => this.availableRooms =  data
        );
    }
    newRoom(roomName, topic){
        let x = {room: roomName, topic: topic};
        this.changeRoom(x);
    }

    changeRoom(x){
        this.chat.changeRoom(x);
    }

    leaveRoom(roomName){
        this.chat.leaveRoom(roomName);
    }

}
