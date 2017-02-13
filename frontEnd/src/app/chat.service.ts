import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
@Injectable()
export class ChatService {
    private url = 'http://localhost:8080';
    private socket;
    //Room variables

    constructor(){
        this.socket = io("localhost:8080/");
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

    getMessages() {
        let observable = new Observable(observer => {
            this.socket.on('updatechat', (room, history) => {
                let x = {room: room, msgHistory: history};
                observer.next(x);
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
                    arr.push(x);
                }
                observer.next(arr);
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

}