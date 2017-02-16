import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
    animations: [
        trigger('loginTrigger', [
            state('inactive', style({
                transform: 'translateY(-100%)'
            })),
            transition('active => inactive', animate('750ms ease'))
        ])
    ]

})
export class MainComponent implements OnInit {
    public userName: string;
    public loggedIn: boolean;
    public loginState: string;
    public userNameAvailable: boolean;
    public roomObj: any;

    constructor(private chat: ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
        this.roomObj = { room: "lobby", topic: "", username: "", privateMsg: false };
        this.loginState = 'active';
    }

    ngOnInit() {
    }

    logIn(name: string) {
        this.userName = name;
        this.loggedIn = true;
        this.loginState = 'inactive';
        this.getCurrentRoom();
    }
    getCurrentRoom() {
        this.chat.getRoomTopic().subscribe(
            room => {
                this.roomObj = room
                this.roomObj.privateMsg = false;
            }
        );
    }

    setViewToPrivateMsg(userName: string) {
        if (userName.toLowerCase() != this.userName.toLowerCase()) {
            this.roomObj.room = userName;
            this.roomObj.topic = "private Msg";
            this.roomObj.privateMsg = true;
        }
    }





}
