export class Message {
   public nick: string;
    public timeStamp: any;
    public message: string;

    constructor(nick, time, message) {
        this.nick = nick;
        this.timeStamp = time;
        this.message = message;
    }
}
