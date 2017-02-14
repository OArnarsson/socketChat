import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.component.html',
  styleUrls: ['./chatdetails.component.sass']
})

export class ChatdetailsComponent implements OnInit {
    public userList:any;
    public globalUsers:any;
    @Input() whoAmI:string;
    @Output() setToPrivate = new EventEmitter();
    constructor(private chat:ChatService) {
        this.userList = {room:'', users:[], ops:[]};
        this.globalUsers = [];
        this.getGlobalUsers();
        this.getUsers();
    }

    ngOnInit() {
        console.log("i'm"+this.whoAmI);
    }

    getUsers(){
        this.chat.getAllUsers().subscribe(
            userList => this.userList = userList
        );
    }
    getGlobalUsers(){
        this.chat.getGlobalUsers().subscribe(
            userList => {
                this.globalUsers = userList;
                this.globalUsers.splice(this.globalUsers.indexOf(this.whoAmI), 1);
            }
        );
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

    banUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.banUser(x);
    }

    unBanUser(userName:any){
        let x = {room:this.userList.room, user: userName};
        this.chat.unBanUser(x);
    }


}
