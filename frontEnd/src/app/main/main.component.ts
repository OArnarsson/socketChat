import {Component, OnInit} from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
    providers: [ChatService]

})
export class MainComponent implements OnInit {
    public userName:string;
    public loggedIn:boolean;
    public userNameAvailable:boolean;
    public userList: string[];
    public roomList: string[];
    public roomObj: any;

    constructor(private chat:ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
        this.roomObj = {room:"lobby"};
    }

    ngOnInit() {
        this.getAllRooms();
    }

    //Socket Functions
    public logIn(newName:string){
        this.chat.logIn(newName).subscribe(
            data => {
                if (data) {
                    console.log("User has been logged in");
                    this.loggedIn = true;
                    this.userName = newName;
                    this.joinRoom();
                }
                else{
                    this.userName ="";
                    this.userNameAvailable = false;
                }
            });
    }
    public joinRoom(){
        this.chat.joinRoom(this.roomObj).subscribe(
            roomObj => {
                this.roomObj = roomObj;
                this.userList = this.roomObj.users;
            }
        )
    }


    public getAllRooms(){
        this.chat.getAllRooms().subscribe(
            rooms => {
                this.roomList = rooms;
            }
        )
    }
    public logStuff(){
        console.log("Users: ",this.userList);
        console.log("Rooms: ",this.roomList);
    }

}
