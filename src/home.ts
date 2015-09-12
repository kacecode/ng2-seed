/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'ng2-seed-home'
})
@View({
    template: `
    <p>{{ text }} ng2-seed Works!<p>
    `
})
export class Home {
    text: string;
  
    constructor() {
        this.text = "Izeni";
    }
}
