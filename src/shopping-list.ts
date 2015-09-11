/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';

class ShoppingItem {
    value: string;
    text: string;

    constructor (text:string) {
        this.text = text;
        this.value = text.toLowerCase();
    }

    compare (thing:ShoppingItem) {
        return this.value === thing.value;
    }
}

@Component({
    selector: "shopping-list"
})
@View({
    template: `
    <input type="text" #thing (keyup) (keyup.enter)="addThing(thing.value)">
    <p>{{ thing.value }}</p>
    <button (click)="addThing(thing.value)">Add It!</button>
    <ul>
        <li *ng-for="#item of items">{{ item.text }}</li>
    </ul>
    `,
    directives: [NgFor]
})
export class ShoppingList {
    items:Array<ShoppingItem>;

    constructor() {
        this.items = [
            new ShoppingItem("Steak"),
            new ShoppingItem("Potatoes")
        ]
    }

    addThing(thing:string) {
        let data = new ShoppingItem(thing);

        if (!this.items.some((item) => data.compare(item))) {
            this.items.push(data);
        }
    }
}