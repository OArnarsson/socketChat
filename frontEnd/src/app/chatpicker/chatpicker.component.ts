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
        ]),
        trigger('modalToggle', [
            state('active', style({
                transform: 'translateY(0%)'
            })),
            state('inactive', style({
                transform: 'translateY(-100%)',
                display: 'none'
            })),
            transition('active => inactive', animate('550ms ease')),
            transition('inactive => active', animate('550ms ease')),
        ])
    ]
})
export class ChatpickerComponent implements OnInit {
    availableRooms: string[];
    activeRooms: string[];
    modalState: string;
    availableState: string;
    activeState: string;
    newName: string;
    newTopic: string;

    constructor(private chat: ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
        this.modalState = 'inactive';
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
        else if (menu == 'modal') {
            if (this.modalState == 'active') {
                this.modalState = 'inactive';
            }
            else {
                this.modalState = 'active';
            }
        }
    }

    newRoom() {
        let x = { room: this.newName, topic: this.newTopic };
        this.changeRoom(x);
        this.newName = "";
        this.newTopic = "";
        this.modalState = 'inactive';
    }

    changeRoom(x) {
        this.chat.changeRoom(x);
    }

    leaveRoom(roomName) {
        this.chat.leaveRoom(roomName);
    }

}
