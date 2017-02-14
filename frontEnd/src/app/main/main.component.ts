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
        this.roomObj = {room: "lobby", topic: "", username: "", privateMsg: false};

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

    setViewToPrivateMsg(userName:string){
        if(userName.toLowerCase() != this.userName.toLowerCase()){
            this.roomObj.room = userName;
            this.roomObj.topic = "private Msg";
        }
    }





}
