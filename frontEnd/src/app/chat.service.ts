import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import {Message} from './currentchat/message';
import {Chatroom} from './currentchat/chatroom'
@Injectable()
export class ChatService {
    private url = 'localhost:8080/';
    private socket;
    //Room variables

    constructor(){
        this.socket = io(this.url);
        this.socket.on("connect", () =>{
            console.log("Connected!");
        });
    }

    public logIn(userName:string) {
        let observable = new Observable(observer =>{
            this.socket.emit("adduser", userName, (data) =>{
                observer.next(data);
                observer.complete();
            });
        });
       return observable;
    }

    sendMessage(msg){
        this.socket.emit('sendmsg', msg);
    }
    sendPrivateMessage(msg){
        this.socket.emit('privatemsg', msg, (data) => {});
    }

    getPrivateMessages(){
        let observable = new Observable(observer => {
            this.socket.on('recvPrivateMsg', (userName, msgObj) => {
                let date = new Date();
                let msg = new Message(userName, date, msgObj);
                observer.next(msg);
            });
        });
        return observable;
    }

    getMessages():Observable<Chatroom> {
        let observable = new Observable(observer => {
            this.socket.on('updatechat', (room, history) => {
                let msgHistory:Message[] = [];
                for(let msg of history){
                    console.log("this is the msg"+msg);
                    msgHistory.push(new Message(msg['nick'], msg['timestamp'],msg['message']))
                };
                let chatRoom = new Chatroom(room, msgHistory);
                observer.next(chatRoom);
            });
        });
        return observable;
    }

    joinRoom(room){
        this.socket.emit('joinroom', room);
    }

    getAllRooms() : Observable<string[]>{
        let observable = new Observable(observer => {
            this.socket.emit("rooms");
            this.socket.on("roomlist", (data) => {
                let arr:string[] = [];
                for(var x in data){
                    console.log("this is a global room: "+x);
                    arr.push(x);
                }
                observer.next(arr);
            });
        });
        return observable;
    }
    getUserRooms() : Observable<string[]>{
        let observable = new Observable(observer => {
            this.socket.emit("rooms");
            this.socket.on("userRooms", (data) => {
                let arr:string[] = [];
                for(var x in data){
                    arr.push(x);
                    console.log("this is a room: "+x);
                }
                observer.next(arr);
            });
        });
        return observable;
    }

    getGlobalUsers(){
        let observable = new Observable(observer => {
            this.socket.on("globalUsers", (users) =>{
                observer.next(users);
            });
        });
        return observable;
    }


    getAllUsers(){
        let observable = new Observable(observer => {
            this.socket.on("updateusers", (room, users, ops) =>{
                let userArr:string[] = [];
                for(let x in users){
                    userArr.push(x);
                }
                let opsArr:string[] = [];
                for(let x in ops){
                    opsArr.push(x);
                }
                let roomObj = {room: room, users:userArr, ops: opsArr};
                observer.next(roomObj);
            });
        });
        return observable;
    }

    getRoomTopic(){
        let observable = new Observable(observer => {
            this.socket.on("updatetopic", (room, topic, username) =>{
                let roomObj = {room: room, topic:topic, username: username};
                observer.next(roomObj);
            });
        });
        return observable;
    }
    changeRoom(x){
        this.socket.emit("joinroom",x);
    }
    leaveRoom(roomName){
        this.socket.emit("partroom", roomName);
    }

    kickUser(obj:any){
        this.socket.emit('kick', obj, (data) => {});
    }
    opUser(obj:any){
        this.socket.emit('op', obj, (data) => {});
    }
    deOpUser(obj:any){
        this.socket.emit('deop', obj, (data) => {});
    }

    banUser(obj:any){
        this.socket.emit('ban', obj, (data) => {});
    }

    unBanUser(obj:any){
        this.socket.emit('unban', obj, (data) => {});
    }
}



















