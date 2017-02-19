import { Component, OnInit, trigger, state, style, transition, animate, Output, EventEmitter, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { SharedRoomObj } from '../classes/shared-room-obj';

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
    showError: boolean;
    @Input() activeObj: SharedRoomObj;
    @Output() setActiveRoom = new EventEmitter();

    constructor(private chat: ChatService) {
        this.availableRooms = [];
        this.getAllRooms();
        this.modalState = 'inactive';
        this.availableState = 'active';
        this.showError = false;
        this.newName = '';
    }

    ngOnInit() {
    }

    getAllRooms() {
        this.chat.getAllRooms().subscribe(
            rooms => this.availableRooms = rooms
        );
    }

    toggleDropDown(menu: string) {
        if (menu === 'all') {
            if (this.availableState === 'active') {
                this.availableState = 'inactive';
            } else {
                this.availableState = 'active';
            }

        }
        if (menu === 'modal') {
            if (this.modalState === 'active') {
                this.modalState = 'inactive';
            } else {
                this.modalState = 'active';
            }
        }
    }

    newRoom() {
        // Requirement for new room name, not == whitespaces.
        if (this.newName.replace(/\s/g, '').length) {
            this.changeRoom({ room: this.newName, topic: this.newTopic });
            this.newName = '';
            this.newTopic = '';
            this.modalState = 'inactive';
        } else {
            this.showError = true;
        }
    }
    removeError(){
        this.showError = false;
    }


    changeRoom(x) {
        this.chat.changeRoom(x).subscribe(
            data => {
                if (data['data']) {
                    this.setActiveRoom.emit(new SharedRoomObj(x.room, x.topic, this.activeObj.username, false));
                }

            }
        );
    }


}
