import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chatdetails',
  templateUrl: './chatdetails.component.html',
  styleUrls: ['./chatdetails.component.sass']
})
export class ChatdetailsComponent implements OnInit {
    @Input() allUsers:string[];
    constructor() {
    }

    ngOnInit() {
    }

}
