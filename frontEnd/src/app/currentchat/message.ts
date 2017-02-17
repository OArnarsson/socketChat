export class Message {
   public nick:string;
    public timeStamp:any;
    public message:string;
    public privateMsg:boolean;

    constructor(nick, time, message, privateMsg){
        this.nick = nick;
        this.timeStamp = time;
        this.message = message;
        this.privateMsg = privateMsg;
    }
}
