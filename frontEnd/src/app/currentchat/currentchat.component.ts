import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ChatService } from '../chat.service'

@Component({
  selector: 'app-currentchat',
  templateUrl: './currentchat.component.html',
  styleUrls: ['./currentchat.component.sass']
})
export class CurrentchatComponent implements OnInit {
    @Input() urName:string;
    @Output() childChangeName = new EventEmitter();
    constructor(private chat:ChatService) {

    }

    ngOnInit() {

    }
    Testing(){
        this.childChangeName.emit('newNameFromChild');
    }

}
