import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
    private url = 'http://localhost:8080';
    private socket;
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
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }

}