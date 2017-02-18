export class Roomdetails {
    public room: string;
    public users: string[];
    public ops: string[];
    public banned: string[];
    constructor(room: string, users: string[], ops: string[], banned: string[]) {
        this.room = room;
        this.users = users;
        this.ops = ops;
        this.banned = banned;
    }
}
