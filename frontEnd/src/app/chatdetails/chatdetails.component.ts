import { Component, OnInit, Output, EventEmitter, Input, trigger, state, style, transition, animate } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Roomdetails } from '../classes/roomdetails';

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
    public roomDetails: Roomdetails[];
    public globalUsers: any;
    public onlineState: string;
    public roomState: string;
    @Input() whereAmI: string;
    @Input() whoAmI: string;
    @Output() setToPrivate = new EventEmitter();
    constructor(private chat: ChatService) {

    }

    ngOnInit() {
        this.roomDetails = [];
        this.globalUsers = [];
        this.onlineState = 'inactive';
        this.roomState = 'active';
        this.getGlobalUsers();
        this.getUsers();
    }

    getUsers() {
        this.chat.getAllUsers().subscribe(
            userList => {
                let found = false;
                for (const index in this.roomDetails) {
                    if (index in this.roomDetails) {
                        if (this.roomDetails[index].room === userList['room']) {
                            this.roomDetails[index] = new Roomdetails(userList['room'], userList['users'], userList['ops']);
                            found = true;
                        }
                    }
                }
                if (!found) {
                    this.roomDetails.push(new Roomdetails(userList['room'], userList['users'], userList['ops']));
                }
            }

        );
    }

    getActiveDetails() {
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI) {
                return detail.users;
            }
        }
        return [];
    }

    getGlobalUsers() {
        this.chat.getGlobalUsers().subscribe(
            userList => {
                this.globalUsers = userList;
                // this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
            }
        );
    }

    toggleDropDown(menu: string) {
        if (menu === 'online') {
            if (this.onlineState === 'active') {
                this.onlineState = 'inactive';
            }
            this.onlineState = 'active';
        }
        if (menu === 'room') {
            if (this.roomState === 'active') {
                this.roomState = 'inactive';
            }
            this.roomState = 'active';
        }
    }


    isAdmin(userName: any) {
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI && detail.ops.indexOf(userName) > -1) {
                return true;
            }
        }
        return false;
    }

    isMyself(userName: any) {
        return userName === this.whoAmI;
    }

    goToPrivate(userName: any) {
        this.setToPrivate.emit(userName);
    }

    kickUser(userName: any) {
        this.chat.kickUser({ room: this.whereAmI, user: userName });
    }

    opUser(userName: any) {
        this.chat.opUser({ room: this.whereAmI, user: userName });
    }

    deOpUser(userName: any) {
        this.chat.deOpUser({ room: this.whereAmI, user: userName });
    }

    banUser(userName: any) {
        this.chat.banUser({ room: this.whereAmI, user: userName });
    }

    unBanUser(userName: any) {
        this.chat.unBanUser({ room: this.whereAmI, user: userName });
    }


}
