import { Component, OnInit, Output, EventEmitter, Input, trigger, state, style, transition, animate } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
    selector: 'app-chatdetails',
    templateUrl: './chatdetails.component.html',
    styleUrls: ['./chatdetails.component.sass'],
    animations: [
        trigger('onlineToggle', [
            state('active', style({
                transform: 'translateX(0%)'
            })),
            state('inactive', style({
                transform: 'translateX(100%)',
                display: 'none'
            })),
            transition('active => inactive', animate('300ms ease')),
            transition('inactive => active', animate('300ms ease'))
        ]),
        trigger('roomToggle', [
            state('active', style({
                transform: 'translateX(0%)'
            })),
            state('inactive', style({
                transform: 'translateX(100%)',
                display: 'none'
            })),
            transition('active => inactive', animate('300ms ease')),
            transition('inactive => active', animate('300ms ease'))
        ])
    ]
})

export class ChatdetailsComponent implements OnInit {
    public userList: any;
    public globalUsers: any;
    public onlineState: string;
    public roomState: string;
    @Input() whoAmI: string;
    @Output() setToPrivate = new EventEmitter();
    constructor(private chat: ChatService) {
        this.userList = { room: '', users: [], ops: [] };
        this.globalUsers = [];
        this.onlineState = 'inactive';
        this.roomState = 'active';
        this.getGlobalUsers();
        this.getUsers();
    }

    ngOnInit() {
    }

    getUsers() {
        this.chat.getAllUsers().subscribe(
            userList => this.userList = userList
        );
    }
    getGlobalUsers() {
        this.chat.getGlobalUsers().subscribe(
            userList => {
                this.globalUsers = userList;
                //this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
            }
        );
    }

    toggleDropDown(menu: string) {
        if (menu == 'online') {
            if (this.onlineState == 'active') {
                this.onlineState = 'inactive';
            }
            else {
                this.onlineState = 'active';
            }
        }
        else if (menu == 'room') {
            if (this.roomState == 'active') {
                this.roomState = 'inactive';
            }
            else {
                this.roomState = 'active';
            }
        }
    }

    notEmpty() {
        return this.userList.users.length > 1;
    }

    isAdmin(userName: any) {
        if (this.userList.ops.indexOf(userName) > -1) {
            return true;
        }
        return false;
    }

    isMyself(userName: any) {
        return userName == this.whoAmI;
    }

    goToPrivate(userName: any) {
        this.setToPrivate.emit(userName);
    }

    kickUser(userName: any) {
        let x = { room: this.userList.room, user: userName };
        this.chat.kickUser(x);
    }

    opUser(userName: any) {
        let x = { room: this.userList.room, user: userName };
        this.chat.opUser(x);
    }
    deOpUser(userName: any) {
        let x = { room: this.userList.room, user: userName };
        this.chat.deOpUser(x);
    }

    banUser(userName: any) {
        let x = { room: this.userList.room, user: userName };
        this.chat.banUser(x);
    }

    unBanUser(userName: any) {
        let x = { room: this.userList.room, user: userName };
        this.chat.unBanUser(x);
    }


}
