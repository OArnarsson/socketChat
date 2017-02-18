import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Message } from '../classes/message';
import { Chatroom } from '../classes/chatroom';
import { SharedRoomObj } from '../classes/shared-room-obj';
import { ServerAnnouncement } from '../classes/server-announcement';
@Injectable()
export class ChatService {
    private url = 'localhost:8080/';
    private socket;
    // Room variables

    constructor() {
        this.socket = io(this.url);
        this.socket.on('connect', () => {
            console.log('Connected!');
        });
    }

    public logIn(userName: string) {
        const observable = new Observable(observer => {
            this.socket.emit('adduser', userName, (data) => {
                observer.next(data);
                observer.complete();
            });
        });
        return observable;
    }

    sendMessage(msg) {
        this.socket.emit('sendmsg', msg);
    }
    sendPrivateMessage(msg) {
        console.log('this is the private msg: ' + msg);
        this.socket.emit('privatemsg', msg, (data) => { });
    }

    getPrivateMessages(): Observable<Message> {
        const observable = new Observable(observer => {
            this.socket.on('recvPrivateMsg', (userName, msgObj) => {
                observer.next(new Message(userName, new Date(), msgObj, true));
            });
        });
        return observable;
    }

    getMessages(): Observable<Chatroom> {
        const observable = new Observable(observer => {
            this.socket.on('updatechat', (room, history) => {
                const msgHistory: Message[] = [];
                for (const msg of history) {
                    msgHistory.push(new Message(msg['nick'], msg['timestamp'], msg['message'], false));
                };
                observer.next(new Chatroom(room, msgHistory));
            });
        });
        return observable;
    }

    joinRoom(room) {
        this.socket.emit('joinroom', room);
    }

    getAllRooms(): Observable<string[]> {
        const observable = new Observable(observer => {
            this.socket.emit('rooms');
            this.socket.on('roomlist', (roomList) => {
                const RoomArr: string[] = [];
                for (const room in roomList) {
                    if (room in roomList) {
                        RoomArr.push(room);
                    }
                };
                observer.next(RoomArr);
            });
        });
        return observable;
    }

    getGlobalUsers() {
        const observable = new Observable(observer => {
            this.socket.on('globalUsers', (users) => {
                observer.next(users);
            });
        });
        return observable;
    }


    getAllUsers() {
        const observable = new Observable(observer => {
            this.socket.on('updateusers', (room, userList, opsList) => {
                const userArr: string[] = [];
                for (const user in userList) {
                    if (user in userList) {
                        userArr.push(user);
                    }
                };
                const opsArr: string[] = [];
                for (const op in opsList) {
                    if (op in opsList) {
                        opsArr.push(op);
                    }
                };
                observer.next({ room: room, users: userArr, ops: opsArr });
            });
        });
        return observable;
    }

    getRoomTopic(): Observable<SharedRoomObj> {
        const observable = new Observable(observer => {
            this.socket.on('updatetopic', (room, topic, username) => {
                observer.next(new SharedRoomObj(room, topic, username, false));
            });
        });
        return observable;
    }

    changeRoom(x): Observable<boolean> {
        const observable = new Observable(observer => {
            this.socket.emit('joinroom', x, (data, reason) => {
                observer.next({ data: data, reason: reason });
            });
        });
        return observable;
    }
    getServerAnnouncement (): Observable<any> {
        const observable = new Observable(observer => {
            this.socket.on('serverAnnouncement', (obj)  => {
                console.log("im getting something!!!");

                observer.next(obj);
            });
        });
        return observable;
    }


    leaveRoom(roomName) {
        this.socket.emit('partroom', roomName);
    }

    kickUser(obj: any) {
        this.socket.emit('kick', obj, (data) => { });
    }
    opUser(obj: any) {
        this.socket.emit('op', obj, (data) => { });
    }
    deOpUser(obj: any) {
        this.socket.emit('deop', obj, (data) => { });
    }

    banUser(obj: any) {
        this.socket.emit('ban', obj, (data) => { });
    }

    unBanUser(obj: any) {
        this.socket.emit('unban', obj, (data) => { });
    }
}



















