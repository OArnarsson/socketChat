import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']

})
export class MainComponent implements OnInit {
    public userName:string;
    public loggedIn:boolean;
    public userNameAvailable:boolean;
    public roomObj:any;

    constructor(private chat:ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
        this.roomObj = {room: "", topic: "", username: ""};

    }

    ngOnInit() {
    }

    logIn(name:string){
        this.userName = name;
        this.loggedIn = true;
        this.getCurrentRoom();
    }
    getCurrentRoom(){
        this.chat.getRoomTopic().subscribe(
            room => this.roomObj = room
        );
    }





}
