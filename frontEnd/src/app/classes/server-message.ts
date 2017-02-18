export class ServerMessage {
    public nick: string;
    public timeStamp: Date;
    public message: string;
    constructor(nick, timestamp, message) {
        this.nick = nick;
        this.timeStamp = timestamp;
        this.message = message;
    }
}
