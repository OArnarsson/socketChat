import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatpicker',
  templateUrl: './chatpicker.component.html',
  styleUrls: ['./chatpicker.component.sass']
})
export class ChatpickerComponent implements OnInit {
    availableRooms: string[];
    activeRooms: string[];
    isCreating: boolean;
    newName: string;
    newTopic: string;

    constructor(private chat:ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
        this.getAllUserRooms();
        this.isCreating = false;
    }

    ngOnInit() {
    }

    getAllRooms(){
        this.chat.getAllRooms().subscribe(
            rooms => this.availableRooms =  rooms
        );
    }

    getAllUserRooms(){
        this.chat.getUserRooms().subscribe(
            rooms => this.activeRooms = rooms
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
