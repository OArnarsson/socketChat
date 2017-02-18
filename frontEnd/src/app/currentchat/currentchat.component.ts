import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chatroom } from './chatroom';
import { Message } from './message';
import { SharedRoomObj } from '../shared-room-obj';

@Component( {
    selector: 'app-currentchat',
    templateUrl: './currentchat.component.html',
    styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    message: string;
    chatRooms: Chatroom[];
    privateConv: Chatroom[];
    @Input() activeObj: SharedRoomObj;
    @Output() setActiveRoom = new EventEmitter();
    constructor(private chat: ChatService) {
        this.message = '';
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
            } else {
                let msg = { nick: this.activeObj.room, message: this.message };
                let found = false;
                for (let index in this.privateConv) {
                    if (this.privateConv[index].name = this.activeObj.room) {
                        this.privateConv[index].history.push(new Message(this.activeObj.username, new Date(), this.message, true));
                        found = true;
                    }
                }
                if (!found) {
                    let msgArr = [];
                    let msg = new Message(this.activeObj.username, new Date(), this.message, true);
                    msgArr.push(msg);
                    this.privateConv.push(new Chatroom(this.activeObj.room, msgArr));
                }
                this.chat.sendPrivateMessage(msg);
            }
            this.message = '';
        }
    }
    getMessages() {
        this.chat.getMessages().subscribe(
            chatRoom => {
                let isNew = true;
                for (let index in this.chatRooms) {
                    if (this.chatRooms[index].name == chatRoom['name']) {
                        // This need some more work.
                        if (this.chatRooms[index].name == this.activeObj.room) {
                            this.chatRooms[index].unreadMessages = 0;
                            this.chatRooms[index].roomClass = '';
                        } else {
                            if (this.chatRooms[index].history.length < chatRoom['history'].length) {
                                this.chatRooms[index].roomClass = 'unreadMsg';
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
                    if (this.privateConv[index].name = message.nick) {
                        this.privateConv[index].history.push(message);
                        found = true;
                    }
                    if (this.privateConv[index].name != this.activeObj.room) {
                        this.privateConv[index].roomClass = "unreadMsg";
                        this.privateConv[index].unreadMessages += 1;
                    }
                }

                if (!found) {
                    let msgArr = [];
                    msgArr.push(message);
                    let newPrivateConv = new Chatroom(message.nick, msgArr);
                    newPrivateConv.unreadMessages = 1;
                    newPrivateConv.roomClass = "unreadMsg";
                    this.privateConv.push(newPrivateConv);
                }
            }
        );
    }

    getActiveRoomChat() {
        if (!this.activeObj.privateMsg) {
            for (let room of this.chatRooms) {
                if (room.name == this.activeObj.room) {
                    room.roomClass = '';
                    room.unreadMessages = 0;
                    return room.history;
                }
            }
        } else {
            for (let room of this.privateConv) {
                if (room.name == this.activeObj.room) {
                    room.roomClass = "";
                    room.unreadMessages = 0;
                    return room.history;
                }
            }
        }
        return [];
    }

    changeRoom(convo:Chatroom) {
        let newObj:SharedRoomObj = new SharedRoomObj(convo.name,"missing from ChatRoom class",this.activeObj.username,false);
        if(convo.history.length > 0){
            if(convo.history[0].privateMsg){
                newObj.privateMsg = true;
                newObj.topic = "Private Message";
            }
        }
        //ToDo: Now we need to be able to retrieve topic from the room.
        this.setActiveRoom.emit(newObj);
        //this.chat.changeRoom(x);
    }

    isActive(x) {
        return x == this.activeObj.room;
    }

    leaveRoom(convo:Chatroom) {
        this.searchAndDestroy(convo.name); //Here we remove the conversation/chatRoom for local array.
        if(!convo.history[0].privateMsg){
            this.chat.leaveRoom(convo.name); //If and only if its a chat room we leave from the room on the server.
        }
    }
    getOpenConversations():Chatroom[]{
        let combined:Chatroom[] = [];
        for(let room of this.chatRooms){
            combined.push(room);
        }
        for(let priv of this.privateConv){
            combined.push(priv);
        }
        return combined;
    }
    searchAndDestroy(roomName:string){
        for(let index = 0; index < this.chatRooms.length; index+=1){
            if(this.chatRooms[index].name == roomName){
                this.chatRooms.splice(index, 1);
                break;
            }
        }
        for(let index = 0; index < this.privateConv.length; index+=1){
            if(this.privateConv[index].name == roomName){
                this.privateConv.splice(index, 1);
                break;
            }
        }
    }
}
