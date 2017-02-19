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
            roomDetails => {
                let found = false;
                for (const index in this.roomDetails) {
                    if (index in this.roomDetails) {
                        if (this.roomDetails[index].room === roomDetails.room) {
                            this.roomDetails[index] = roomDetails;
                            found = true;
                        }
                    }
                }
                if (!found) {
                    this.roomDetails.push(roomDetails);
                }
            }

        );
    }

    getActiveDetails() {
        let UserArr: string[] = [];
        let isAdmin: boolean = false;
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI) {
                // User list for normal user
                UserArr = detail.users;

                // We add banned users to the list for admins.
                if (detail.ops.indexOf(this.whoAmI) > -1) {
                    isAdmin = true;
                }
            }
        }
        if (isAdmin){
            UserArr = this.getBannedUsers(UserArr);
        }
        return UserArr;
    }

    getBannedUsers(UserArr: string[]) {
        let allUsers = UserArr;
        let bannedUsers: string [];
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI) {
                bannedUsers = detail.banned;
            }
        };

        return allUsers.concat(bannedUsers);
    }
    getUserName(user){
        if (user === this.whoAmI) {
           return 'You';
        }
        return user;
    }
    getGlobalUsers() {
        this.chat.getGlobalUsers().subscribe(
            userList => {
                this.globalUsers = userList;
                // this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
            }
        );
    }

    getFontAwesomeClass(action: string, userName: string){
        let className: string = '';
        switch (action){
            case 'admin':
                if (this.isAdmin(userName)) {
                    className = 'fa fa-user-times';
                }
                else{
                    className = 'fa fa-user-o';
                }
                break;
            case 'ban':
                if (this.isBanned(userName)) {
                    className = 'fa fa-circle-o';
                }
                else{
                    className = 'fa fa-ban';
                }
                break;
        }
        return className;
    }
    getspanDescription(action:string, userName:string){
        let description: string = '';
        switch (action){
            case 'admin':
                if (this.isAdmin(userName)) {
                    description = 'DeOp User';
                }
                else{
                    description = 'Op User';
                }
                break;
            case 'ban':
                if (this.isBanned(userName)) {
                    description = 'Unban';
                }
                else{
                    description = 'Ban';
                }
                break;
        }
        return description;
    }

    toggleDropDown(menu: string) {
        if (menu === 'online') {
            if (this.onlineState === 'active') {
                this.onlineState = 'inactive';
            }
            else {
                this.onlineState = 'active';
            }
        }
        if (menu === 'room') {
            if (this.roomState === 'active') {
                this.roomState = 'inactive';
            }
            else {
                this.roomState = 'active';
            }
        }
    }

    isBanned(userName: string){
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI && detail.banned.indexOf(userName) > -1) {
                return true;
            }
        }
        return false;
    }

    isAdmin(userName: string) {
        for (const detail of this.roomDetails) {
            if (detail.room === this.whereAmI && detail.ops.indexOf(userName) > -1) {
                return true;
            }
        }
        return false;
    }

    isAdminAndNotMe(user){
        return (this.isAdmin(this.whoAmI) && user !== this.whoAmI);
    }

    isMyself(userName: string) {
        return userName === this.whoAmI;
    }

    goToPrivate(userName: string) {
        this.setToPrivate.emit(userName);
    }

    kickUser(userName: string) {
        this.chat.kickUser({ room: this.whereAmI, user: userName });
    }

    toggleOpUser(userName: string) {
        if (this.isAdmin(userName)) {
            this.chat.deOpUser({ room: this.whereAmI, user: userName });
        }
        else {
            this.chat.opUser({ room: this.whereAmI, user: userName });
        }
    }

    toggleBanUser(userName: string) {
        if (this.isBanned(userName)) {
            this.chat.unBanUser({ room: this.whereAmI, user: userName });
        }
        else {
            this.chat.banUser({ room: this.whereAmI, user: userName });
        }
    }

}
