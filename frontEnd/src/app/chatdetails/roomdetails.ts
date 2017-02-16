export class Roomdetails {
    public room: string;
    public users:string[];
    public ops:string[];
    constructor(room:string, users:string[], ops:string[]){
        this.room = room;
        this.users = users;
        this.ops = ops;
    }
}