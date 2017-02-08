import {Component, OnInit} from '@angular/core';
import * as sClient from 'socket.io-client';
import { Room } from '../classes/room';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
    public userNameTaken:boolean;
    public isLoggedIn:boolean;
    public userName:string;
    public allAvailableRooms:Room[];
    public allUsers:any;


    private socket:any;


    constructor() { }

    ngOnInit() {
        this.isLoggedIn = true;
        this.userNameTaken = false;
        this.userName = "";


        this.socket = sClient("localhost:8080/");
        this.socket.on("connect", () =>{
            console.log("Connected!");
        });
    }

    public logIn(){
        this.socket.emit("adduser", this.userName, (success) =>{
            if(success){
                this.isLoggedIn = true;
                console.log("Hey ur in!", success);
            }
            else{
                this.userNameTaken = true;
            }
        });
    }

}
