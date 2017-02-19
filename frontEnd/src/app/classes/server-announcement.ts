import { ServerMessage} from './server-message';
export class ServerAnnouncement {
    public room: string;
    public msg: ServerMessage;
    public reason: string;

    constructor(room, msg, reason) {
        this.room = room;
        this.msg = msg;
        this.reason = reason;
    }
}
