import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chatroom } from '../classes/chatroom';
import { Message } from '../classes/message';
import { SharedRoomObj } from '../classes/shared-room-obj';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { ServerAnnouncement } from '../classes/server-announcement'
import {ServerMessage} from "../classes/server-message";

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
    constructor(private chat: ChatService, private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
        this.message = '';
        this.getMessages();
        this.getPrivateMessages();
        this.getServerAnnouncement();
        this.chatRooms = [];
        this.privateConv = [];
        this.toastyConfig.theme = 'material';
    }

    ngOnInit() {

    }

    sendMsg(event: any) {
        if (event.keyCode === 13 || event === 'sendButton') {
            if (!this.activeObj.privateMsg) {
                this.chat.sendMessage({ roomName: this.activeObj.room, msg: this.message });
            } else {
                let found = false;
                for (const index in this.privateConv) {
                    if (index in this.privateConv) {
                        if (this.privateConv[index].name === this.activeObj.room) {
                            this.privateConv[index].history.push(new Message(this.activeObj.username, new Date(), this.message, true));
                            found = true;
                        }
                    }
                }
                if (!found) {
                    const msgArr = [];
                    msgArr.push(new Message(this.activeObj.username, new Date(), this.message, true));
                    this.privateConv.push(new Chatroom(this.activeObj.room, msgArr));
                }
                this.chat.sendPrivateMessage({ nick: this.activeObj.room, msg: this.message });
            }
            this.message = '';
        }
    }
    getMessages() {
        this.chat.getMessages().subscribe(
            chatRoom => {
                let isNew = true;
                for (const index in this.chatRooms) {
                    if (this.chatRooms[index].name === chatRoom['name']) {
                        // This need some more work.
                        if (this.chatRooms[index].name === this.activeObj.room) {
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
        for (const room of this.chatRooms) {
            if (room.name === this.activeObj.room) {
                size = room.history.length - room.unreadMessages;
            }
        }
        return size;
    }

    getPrivateMessages() {
        this.chat.getPrivateMessages().subscribe(
            message => {
                let found = false;
                for (const index in this.privateConv) {
                    if (index in this.privateConv) {
                        if (this.privateConv[index].name === message.nick) {
                            this.privateConv[index].history.push(message);
                            found = true;
                        }
                        if (this.privateConv[index].name !== this.activeObj.room) {
                            this.privateConv[index].roomClass = 'unreadMsg';
                            this.privateConv[index].unreadMessages += 1;
                        }
                    }
                }

                if (!found) {
                    const msgArr = [];
                    msgArr.push(message);
                    const newPrivateConv = new Chatroom(message.nick, msgArr);
                    newPrivateConv.unreadMessages = 1;
                    newPrivateConv.roomClass = 'unreadMsg';
                    this.privateConv.push(newPrivateConv);
                }
            }
        );
    }

    getActiveRoomChat() {
        if (!this.activeObj.privateMsg) {
            for (const room of this.chatRooms) {
                if (room.name === this.activeObj.room) {
                    room.roomClass = '';
                    room.unreadMessages = 0;
                    return room.history;
                }
            }
        } else {
            for (const room of this.privateConv) {
                if (room.name === this.activeObj.room) {
                    room.roomClass = '';
                    room.unreadMessages = 0;
                    return room.history;
                }
            }
        }
        return [];
    }

    changeRoom(convo: Chatroom) {
        const newObj: SharedRoomObj = new SharedRoomObj(convo.name, 'missing from ChatRoom class', this.activeObj.username, false);
        if (convo.history.length > 0) {
            if (convo.history[0].privateMsg) {
                newObj.privateMsg = true;
                newObj.topic = 'Private Message';
            }
        }
        // ToDo: Now we need to be able to retrieve topic from the room.
        this.setActiveRoom.emit(newObj);
        // this.chat.changeRoom(x);
    }

    isActive(x) {
        return x === this.activeObj.room;
    }

    leaveRoom(convo: Chatroom) {
        this.searchAndDestroy(convo.name); // Here we remove the conversation/chatRoom for local array.
        if (!convo.history[0].privateMsg) {
            this.chat.leaveRoom(convo.name); // If and only if its a chat room we leave from the room on the server.
        }
    }
    getOpenConversations(): Chatroom[] {
        const combined: Chatroom[] = [];
        for (const room of this.chatRooms){
            combined.push(room);
        };
        for (const priv of this.privateConv){
            combined.push(priv);
        };
        return combined;
    }
    searchAndDestroy(roomName: string) {
        for (let index = 0; index < this.chatRooms.length; index += 1) {
            if (this.chatRooms[index].name === roomName) {
                this.chatRooms.splice(index, 1);
                break;
            };
        }
        for (let index = 0; index < this.privateConv.length; index += 1) {
            if (this.privateConv[index].name === roomName) {
                this.privateConv.splice(index, 1);
                break;
            };
        }
        if (this.getOpenConversations().length > 0 && roomName === this.activeObj.room) {
            this.changeRoom(this.getOpenConversations()[this.getOpenConversations().length-1]);
        }
    }

    getServerAnnouncement(){
        this.chat.getServerAnnouncement().subscribe(
            Announcement => {
                switch(Announcement.reason){
                    case 'kick' :
                        // Anounce message for the user
                        this.searchAndDestroy(Announcement.room);
                        this.addToast("o shii", Announcement);
                        break;

                    case 'ban' :
                        // Anounce message for the user
                        this.searchAndDestroy(Announcement.room);
                        this.addToast("O shii", Announcement);
                        break;

                    case 'unBan' :
                        this.addToast("Congratz", Announcement);
                        break;

                    case 'op' :
                        this.addToast("Congratz", Announcement);
                        break;

                    case 'deOp' :
                        this.addToast("O shii", Announcement);
                        break;

                }
            }
        )
    }
    // Toast service functions
    addToast(title: string, announcement: ServerAnnouncement) {
        var toastOptions:ToastOptions = {
            title: title,
            msg: announcement.msg.message,
            showClose: true,
            timeout: 5000,
            theme: 'material',
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        switch(announcement.reason){
            case 'kick' :
                this.toastyService.warning(toastOptions);
                break;

            case 'ban' :
                this.toastyService.warning(toastOptions);
                break;

            case 'unBan' :
                this.toastyService.success(toastOptions);
                break;

            case 'op' :
                this.toastyService.success(toastOptions);
                break;

            case 'deOp' :
                this.toastyService.warning(toastOptions);
                break;
        }
    }


}
