import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service'
import { Chatroom } from "./chatroom";
import { Message } from "./message";

@Component({
    selector: 'app-currentchat',
    templateUrl: './currentchat.component.html',
    styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    message: string;
    chatRooms: Chatroom[];
    privateConv: Chatroom[];
    @Input() activeObj: any;
    constructor(private chat: ChatService) {
        this.message = "";
        this.getMessages();
        this.getPrivateMessages();
        this.chatRooms = [];
        this.privateConv = [];
    }

    ngOnInit() {

    }

    sendMsg(event: any) {
        if (event.keyCode == 13 || event == 'sendButton') {
            let msg = { roomName: this.activeObj.room, msg: this.message };
            if (!this.activeObj.privateMsg) {
                this.chat.sendMessage(msg);
            }
            else {
                let msg = { nick: this.activeObj.room, message: this.message };
                let found = false;
                for (let index in this.privateConv) {
                    if (this.privateConv[index].name = this.activeObj.room) {
                        this.privateConv[index].history.push(new Message(this.activeObj.username, new Date(), this.message));
                        found = true;
                    }
                }
                if (!found) {
                    let msgArr = [];
                    let msg = new Message(this.activeObj.username, new Date(), this.message);
                    msgArr.push(msg);
                    this.privateConv.push(new Chatroom(this.activeObj.room, msgArr));
                }
                this.chat.sendPrivateMessage(msg);
            }
            this.message = "";
        }
    }
    getMessages() {
        this.chat.getMessages().subscribe(
            chatRoom => {
                let isNew = true;
                for (let index in this.chatRooms) {
                    if (this.chatRooms[index].name == chatRoom['name']) {
                        //This need some more work.
                        if (this.chatRooms[index].name == this.activeObj.room) {
                            this.chatRooms[index].unreadMessages = 0;
                            this.chatRooms[index].roomClass = "";
                        }
                        else {
                            if(this.chatRooms[index].history.length < chatRoom['history'].length){
                                this.chatRooms[index].roomClass = "unreadMsg";
                                this.chatRooms[index].unreadMessages += 1;
                            }
                        }
                        this.chatRooms[index].history = chatRoom['history'];
                        isNew = false;
                    }
                }
                if (isNew) {
                    this.chatRooms.push(chatRoom);
                }
            }
        );
    }
    getUnreadMessages() {
        let size: number;
        for (let room of this.chatRooms) {
            if (room.name == this.activeObj.room) {
                size = room.history.length - room.unreadMessages;
            }
        }
        return size;
    }

    getPrivateMessages() {
        this.chat.getPrivateMessages().subscribe(
            message => {
                let found = false;
                for (let index in this.privateConv) {
                    if (this.privateConv[index].name = message['nick']) {
                        this.privateConv[index].history.push(new Message(message['nick'], message['timeStamp'], message['message']));
                        found = true;
                    }
                }
                if (!found) {
                    let msgArr = [];
                    let msg = new Message(message['nick'], message['timeStamp'], message['message']);
                    msgArr.push(msg);
                    this.privateConv.push(new Chatroom(message['nick'], msgArr));
                }
            }
        )
    }

    getActiveRoomChat() {
        if (!this.activeObj.privateMsg) {
            for (let room of this.chatRooms) {
                if (room.name == this.activeObj.room) {
                    return room.history;
                }
            }
        }
        else {
            for (let room of this.privateConv) {
                if (room.name == this.activeObj.room) {
                    return room.history;
                }
            }
        }
        return [];
    }

    changeRoom(x) {
        this.chat.changeRoom(x);
    }

    leaveRoom(roomName) {
        this.chat.leaveRoom(roomName);
    }




}
