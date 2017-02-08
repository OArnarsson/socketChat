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

    constructor(private chat:ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
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
                    this.getAllUsers();
                }
                else{
                    this.userName ="";
                    this.userNameAvailable = false;
                }
            });
    }

    public getAllUsers(){
        this.chat.getAllUsers().subscribe(
            users => {
                this.userList = users;
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
