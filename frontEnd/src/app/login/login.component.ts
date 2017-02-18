import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    public userName: string;
    @Input() isAvailable: boolean;
    @Output() attemptToLogIn = new EventEmitter();
    constructor(private chat: ChatService) {
    }

    ngOnInit() {
        this.userName = '';
    }
    public getKeyEv(ev: any) {
        if (ev.keyCode === 13) {
            this.logIn();
        }
    }
    public logIn() {
        this.chat.logIn(this.userName).subscribe(
            data => {
                if (data) {
                    console.log(`'${this.userName}' has been logged in`);
                    this.isAvailable = true;
                    this.attemptToLogIn.emit(this.userName);
                    this.joinRoom();
                } else {
                    this.userName = '';
                    this.isAvailable = false;
                }
            });
    }

    public joinRoom() {
        this.chat.joinRoom({ room: 'lobby' });
    }


}
