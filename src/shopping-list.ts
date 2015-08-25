/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: "shopping-list"
})
@View({
    template: `
    <input type="text" #thing (keyup)>
    <p>{{ thing.value }}</p>
    <button (click)="addThing(thing.value)">Add It!</button>
    <ul>
        <li *ng-for="#item of items">{{ item }}</li>
    </ul>
    `,
    directives: [NgFor]
})
export class ShoppingList {
    items:Array<string>;

    constructor() {
        this.items = ['Steak', 'Potatoes']
    }

    addThing(thing:string) {
        
        this.items.push(thing);
    }
}