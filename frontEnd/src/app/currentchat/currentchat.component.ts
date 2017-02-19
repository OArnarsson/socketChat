import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Chatroom } from '../classes/chatroom';
import { Message } from '../classes/message';
import { SharedRoomObj } from '../classes/shared-room-obj';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { ServerAnnouncement } from '../classes/server-announcement';

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
    constructor(private chat: ChatService, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
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
                    this.privateConv.push(new Chatroom(this.activeObj.room, this.activeObj.topic, msgArr));
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
                    if (this.chatRooms[index].name === chatRoom.name) {
                        // This need some more work.
                        if (this.chatRooms[index].name !== this.activeObj.room) {
                            if (this.chatRooms[index].history.length < chatRoom.history.length) {
                                this.chatRooms[index].roomClass = 'unreadMsg';
                                this.chatRooms[index].unreadMessages += 1;
                            }
                        }
                        this.chatRooms[index].history = chatRoom.history;
                        isNew = false;
                    }
                }
                if (isNew) {
                    this.chatRooms.push(chatRoom);
                }
            }
        );
    }

    getPrivateMessages() {
        this.chat.getPrivateMessages().subscribe(
            message => {
                let found = false;
                for (let index = 0; index < this.privateConv.length; index += 1) {
                    if (this.privateConv[index].name === message.nick) {
                        this.privateConv[index].history.push(message);
                        this.privateConv[index].unreadMessages += 1;
                        this.privateConv[index].roomClass = 'unreadMsg';
                        found = true;
                    }
                }
                if (!found) {
                    const msgArr = [];
                    msgArr.push(message);
                    const newPrivateConv = new Chatroom(message.nick, 'Private Msg', msgArr);
                    newPrivateConv.unreadMessages += 1;
                    newPrivateConv.roomClass = 'unreadMsg';
                    this.privateConv.push(newPrivateConv);
                }
            }
        );
    }

    getUnreadMessages() {
        let size = 0;
        let found = false;
        for (const room of this.chatRooms) {
            if (room.name === this.activeObj.room) {
                found = true;
                size = room.history.length - room.unreadMessages;
            }
        }
        if (!found) {
            for (const room of this.privateConv) {
                if (room.name === this.activeObj.room) {
                    size = room.history.length - room.unreadMessages;
                }
            }
        }
        return size;
    }

    getActiveRoomChat() {
        if (this.findActiveRoom() !== null) {
            return this.findActiveRoom().history;
        }
        return [];
    }
    findActiveRoom() {
        if (!this.activeObj.privateMsg) {
            for (let index = 0; index < this.chatRooms.length; index += 1) {
                if (this.chatRooms[index].name === this.activeObj.room) {
                    return this.chatRooms[index];
                }
            }
        } else {
            for (let index = 0; index < this.privateConv.length; index += 1) {
                if (this.privateConv[index].name === this.activeObj.room) {
                    return this.privateConv[index];
                }
            }
        }
        return null;
    }

    resetRoomUnreadMsg() {
        const active = this.findActiveRoom();
        if (active !== null) {
            setTimeout(function(){
                active.unreadMessages = 0;
                active.roomClass = '';
            }, 1250);

        }
    }

    changeRoom(convo: Chatroom) {
        const newObj: SharedRoomObj = new SharedRoomObj(convo.name, convo.topic, this.activeObj.username, false);
        if (convo.history.length > 0) {
            if (convo.history[0].privateMsg) {
                newObj.privateMsg = true;
                newObj.topic = 'Private Msg';
            }
        }
        // ToDo: Now we need to be able to retrieve topic from the room.
        this.setActiveRoom.emit(newObj);
        // this.chat.changeRoom(x);
    }

    isActive(x) {
        return x === this.activeObj.room;
    }
    getUserName(userName: string) {
        if (userName === this.activeObj.username) {
            return 'You';
        }
        return userName;
    }
    isMyself(userName: string) {
        return userName === this.activeObj.username;
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
            this.changeRoom(this.getOpenConversations()[this.getOpenConversations().length - 1]);
        }
    }

    getServerAnnouncement() {
        this.chat.getServerAnnouncement().subscribe(
            Announcement => {
                let title = 'Be adviced! ';
                if (Announcement.reason === 'self-kick' || Announcement.reason === 'self-ban') {
                    this.searchAndDestroy(Announcement.room);
                }

                if (Announcement.reason === 'unBan' || Announcement.reason === 'op') {
                   title = 'Hurray!';
                }

                if (Announcement.reason === 'wrong password' || Announcement.reason === 'banned') {
                    title = 'To bad...';
                }
                if (Announcement.reason === 'join') {
                    title = 'Remember to be nice!';
                }
                if (Announcement.reason === 'leave') {
                    title = 'Good or bad thing ?';
                }

                this.addToast(title, Announcement);
            }
        );
    }
    // Toast service functions
    // For information about how this toast works:  https://github.com/akserg/ng2-toasty

    addToast(title: string, announcement: ServerAnnouncement) {
        const toastOptions: ToastOptions = {
            title: title,
            msg: announcement.msg.message,
            showClose: true,
            timeout: 5000,
            theme: 'material',
            onAdd: (toast: ToastData) => {},
            onRemove: function(toast: ToastData) {}
        };
        let sent = false;
        if (announcement.reason === 'unBan' || announcement.reason === 'op' || announcement.reason === 'join') {
            sent = true;
            this.toastyService.success(toastOptions);
        }
        if (announcement.reason === 'ban') {
            sent = true;
            this.toastyService.info(toastOptions);
        }
        if (announcement.reason === 'self-ban') {
            sent = true;
            this.toastyService.error(toastOptions);
        }
        if (!sent) {
            this.toastyService.info(toastOptions);
        }
    }


}
