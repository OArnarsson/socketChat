import {Component, OnInit} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.component.html',
  styleUrls: ['./chatdetails.component.sass']
})

export class ChatdetailsComponent implements OnInit {
    public userList:any;
    public globalUsers:any;
    constructor(private chat:ChatService) {
        this.userList = {room:'', users:[], ops:[]};
        this.globalUsers = [];
        this.getGlobalUsers();
        this.getUsers();
    }

    ngOnInit() {

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
            }
        );
    }

}
