export class SharedRoomObj {
    room: string;
    topic: string;
    username: string;
    privateMsg: boolean;
    constructor(room, topic, username, privateMsg) {
        this.room = room;
        this.topic = topic;
        this.username = username;
        this.privateMsg = privateMsg;
    }


}
