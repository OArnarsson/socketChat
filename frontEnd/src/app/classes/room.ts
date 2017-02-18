export class Room {
    public users: string[];
    public ops: string[];
    public banned: string[];
    public messageHistory: string[];
    public topic: string;
    public locked: boolean;
    public password: string;

    constructor() {
        this.users = [];
        this.ops = [];
        this.banned = [];
        this.messageHistory = [];
        this.topic = '';
        this.locked = false;
        this.password = '';
    }
}
