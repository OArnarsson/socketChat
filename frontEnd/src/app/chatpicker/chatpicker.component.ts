import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
    selector: 'app-chatpicker',
    templateUrl: './chatpicker.component.html',
    styleUrls: ['./chatpicker.component.sass'],
    animations: [
        trigger('availableToggle', [
            state('active', style({
                transform: 'translateX(0%)'
            })),
            state('inactive', style({
                transform: 'translateX(-100%)',
                display: 'none'
            })),
            transition('active => inactive', animate('300ms ease')),
            transition('inactive => active', animate('300ms ease'))
        ]),
        trigger('activeToggle', [
            state('active', style({
                transform: 'translateX(0%)'
            })),
            state('inactive', style({
                transform: 'translateX(-100%)',
                display: 'none'
            })),
            transition('active => inactive', animate('300ms ease')),
            transition('inactive => active', animate('300ms ease')),
        ])
    ]
})
export class ChatpickerComponent implements OnInit {
    availableRooms: string[];
    activeRooms: string[];
    isCreating: boolean;
    availableState: string;
    activeState: string;
    newName: string;
    newTopic: string;

    constructor(private chat: ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
        this.getAllUserRooms();
        this.isCreating = false;
        this.activeState = 'active';
        this.availableState = 'inactive';
    }

    ngOnInit() {
    }

    getAllRooms() {
        this.chat.getAllRooms().subscribe(
            rooms => this.availableRooms = rooms
        );
    }

    getAllUserRooms() {
        this.chat.getUserRooms().subscribe(
            rooms => this.activeRooms = rooms
        );
    }

    toggleModal() {
        this.isCreating = !this.isCreating;
    }

    toggleDropDown(menu: string) {
         if (menu == 'active') {
            if (this.activeState == 'active') {
                this.activeState = 'inactive';
            }
            else {
                this.activeState = 'active';
            }
        }
        else if (menu == 'all') {
            if (this.availableState == 'active') {
                this.availableState = 'inactive';
            }
            else {
                this.availableState = 'active';
            }
        }
    }

    newRoom() {
        let x = { room: this.newName, topic: this.newTopic };
        this.changeRoom(x);
        this.isCreating = false;
    }

    changeRoom(x) {
        this.chat.changeRoom(x);
    }

    leaveRoom(roomName) {
        this.chat.leaveRoom(roomName);
    }

}
