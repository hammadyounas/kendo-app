import {Component,OnInit} from '@angular/core'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit{
    constructor(){}
    ngOnInit(){}
    title = 'Hello World!';

   onButtonClick() {
       this.title = 'Hello from Kendo UI!';
   }
}