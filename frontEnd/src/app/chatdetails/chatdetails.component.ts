import { Component, OnInit, Output, EventEmitter, Input, trigger, state, style, transition, animate} from '@angular/core';
import { ChatService } from "../chat.service";
import { Roomdetails } from "./roomdetails";

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
        ])
    ]
})

export class ChatdetailsComponent implements OnInit {
    public userList:any;
    public roomDetails:Roomdetails[];
    public globalUsers:any;
    public onlineState:string;
    @Input() whereAmI:string;
    @Input() whoAmI:string;
    @Output() setToPrivate = new EventEmitter();
    constructor(private chat:ChatService) {
        this.roomDetails = [];
        this.userList = {room:'', users:[], ops:[]};
        this.globalUsers = [];
        this.onlineState = 'inactive';
        this.getGlobalUsers();
        this.getUsers();
    }

    ngOnInit() {
    }

    getUsers(){
        this.chat.getAllUsers().subscribe(
            userList => {
                let found = false;
                for(let index in this.roomDetails){
                    if(this.roomDetails[index].room == userList['room']){
                        this.roomDetails[index] = userList['room'];
                        found = true;
                    }
                }
                if(!found){
                    this.roomDetails.push(new Roomdetails(userList['room'], userList['users'], userList['ops']));
                }
            }

        );
    }
    getActiveDetails(){
        for(let detail of this.roomDetails){
            if(detail.room == this.whereAmI){
                return detail.users;
            }
        }
        return [];
    }



    getGlobalUsers(){
        this.chat.getGlobalUsers().subscribe(
            userList => {
                this.globalUsers = userList;
                //this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
            }
        );
    }

    toggleDropDown() {
        if(this.onlineState == 'active') {
            this.onlineState = 'inactive';
        }
        else {
            this.onlineState = 'active';
        }
    }

    notEmpty() {
        return this.userList.users.length > 1;
    }

    isAdmin(userName:any) {
        if(this.userList.ops.indexOf(userName) > -1) {
            return true;
        }
        return false;
    }

    isMyself(userName:any) {
        return userName==this.whoAmI;
    }

    goToPrivate(userName:any){
        this.setToPrivate.emit(userName);
    }

    kickUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.kickUser(x);
    }

    opUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.opUser(x);
    }

    deOpUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.deOpUser(x);
    }

    banUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.banUser(x);
    }

    unBanUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.unBanUser(x);
    }


}
