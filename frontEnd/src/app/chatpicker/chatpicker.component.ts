import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chatpicker',
  templateUrl: './chatpicker.component.html',
  styleUrls: ['./chatpicker.component.sass']
})
export class ChatpickerComponent implements OnInit {
    @Input() chosenChat:string;
    constructor() { }

    ngOnInit() {
    }

}
