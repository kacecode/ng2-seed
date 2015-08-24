/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'ng2-seed-menu',
    injectables: []})
@View({
    templateUrl: 'menu.html',
    directives: []
})
export class Ng2SeedMenu {
    text: string;

    constructor() {
        this.text = "foo";
    }
}