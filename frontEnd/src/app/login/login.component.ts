import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    public userName:string;
    @Input() isAvailable:boolean;
    @Output() attemptToLogIn= new EventEmitter();
    constructor() {
    }

    ngOnInit() {
        this.userName = "";
    }

    public logIn(){
        this.attemptToLogIn.emit(this.userName);
    }
}
