import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.component.html',
  styleUrls: ['./chatdetails.component.sass']
})

export class ChatdetailsComponent implements OnInit {
    public userList:any;
    public globalUsers:any;
    @Output() setToPrivate = new EventEmitter();
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
    goToPrivate(userName:any){
        this.setToPrivate.emit(userName);
    }


}
