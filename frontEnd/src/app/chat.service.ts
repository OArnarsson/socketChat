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

    joinRoom(roomObj) : Observable<string[]>{
        let observable = new Observable(observer => {
            this.socket.emit("joinroom", roomObj, (data) =>{
                if(data){
                    this.socket.on("updateusers", (room, users, ops) =>{
                        let userArr: string[] = [];
                        for(let user in users){
                            userArr.push(user);
                        }
                        let obj = {
                            room: room,
                            users: userArr
                        };
                        console.log(obj);

                        observer.next(obj);
                    });
                }
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