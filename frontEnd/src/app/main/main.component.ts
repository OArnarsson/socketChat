import {Component, OnInit} from '@angular/core';
import { ChatService }       from '../chat.service';

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
    constructor(private chat:ChatService) {
        this.loggedIn = false;
        this.userNameAvailable = true;
    }

    ngOnInit() {
    }

    //Socket Functions
    public logIn(newName:string){
        this.chat.logIn(newName).subscribe(
            data => {
                if (data) {
                    console.log("User has been logged in");
                    this.loggedIn = true;
                    this.userName = newName;
                }
                else{
                    this.userName ="";
                    this.userNameAvailable = false;
                }
            });
    }

}
