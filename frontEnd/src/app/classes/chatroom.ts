import { Message } from './message';

export class Chatroom {
    public name: string;
    public topic: string;
    public history: Message[];
    public unreadMessages: number;
    public roomClass: string;

    constructor(name, topic, messages) {
        this.name = name;
        this.history = messages;
        this.topic = topic;
        this.unreadMessages = 0;
        this.roomClass = '';
    }
}
