import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { SharedRoomObj } from '../classes/shared-room-obj';


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
    public loggedIn: boolean;
    public loginState: string;
    public userNameAvailable: boolean;
    public roomObj: SharedRoomObj;

    constructor(private chat: ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
        this.roomObj = new SharedRoomObj('lobby', '', '', false);
        this.loginState = 'active';
    }

    ngOnInit() {
    }

    logIn(name: string) {
        this.roomObj.username = name;
        this.loggedIn = true;
        this.loginState = 'inactive';
        this.getCurrentRoom();
    }
    getCurrentRoom() {
        this.chat.getRoomTopic().subscribe(
            room => {
                this.roomObj = room;
            }
        );
    }

    setViewToPrivateMsg(userName: string) {
        if (userName.toLowerCase() !== this.roomObj.username.toLowerCase()) {
            this.roomObj.room = userName;
            this.roomObj.topic = 'private Msg';
            this.roomObj.privateMsg = true;
        }
    }

    changeConvo(roomObj: SharedRoomObj) {
        this.roomObj = roomObj;
    }





}
