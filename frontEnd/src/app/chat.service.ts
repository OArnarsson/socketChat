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

    sendMessage(message){
        this.socket.emit('add-message', message);
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

    getAllUsers() : Observable<string[]>{
        let observable = new Observable(observer => {
            this.socket.emit("users");
            this.socket.on("userlist", (data) => {
                let arr:string[] = [];
                for(var x of data){
                    arr.push(x);
                }
                observer.next(arr);
            });
        });
        return observable;
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

}