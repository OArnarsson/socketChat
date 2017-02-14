import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatpicker',
  templateUrl: './chatpicker.component.html',
  styleUrls: ['./chatpicker.component.sass']
})
export class ChatpickerComponent implements OnInit {
    availableRooms: string[];
    isCreating: boolean;
    newName: string;
    newTopic: string;

    constructor(private chat:ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
        this.isCreating = false;
    }

    ngOnInit() {
    }

    getAllRooms(){
        this.chat.getAllRooms().subscribe(
            data => this.availableRooms =  data
        );
    }

    toggleModal() {
        this.isCreating = !this.isCreating;
    }

    newRoom(){
        let x = {room: this.newName, topic: this.newTopic};
        this.changeRoom(x);
        this.isCreating = false;
    }

    changeRoom(x){
        this.chat.changeRoom(x);
    }

    leaveRoom(roomName){
        console.log('leaving: ', roomName);
        this.chat.leaveRoom(roomName);
    }

}
