import {Component, OnInit} from '@angular/core';
import * as sClient from 'socket.io-client';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
    public userNameTaken:boolean;
    public isLoggedIn:boolean;
    public model:any;
    private socket:any;


    constructor() { }

    ngOnInit() {
        this.isLoggedIn = false;
        this.userNameTaken = false;
        this.model = {name: ""};
        this.socket = sClient("localhost:8080/");
        this.socket.on("connect", () =>{
            console.log("Connected!");
        });
    }

    public logIn(){
        this.socket.emit("adduser", this.model.name, (success) =>{
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
