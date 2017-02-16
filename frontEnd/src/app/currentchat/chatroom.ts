import {Message} from './message'

export class Chatroom {
    public name:string;
    public history:Message[];
    public unreadMessages:number;
    public roomClass:string;

    constructor(name, messages){
        this.name = name;
        this.history = messages;
        this.unreadMessages = 0;
        this.roomClass = "";
    }
}
