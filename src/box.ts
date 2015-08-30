/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, EventEmitter} from 'angular2/angular2';
import {BoxArray} from './boxarray';


@Component({
    selector: "box",
    properties: [
        "color",
    ],
    events: ['changecolor']
})
@View({
    template: `
        <div (click)="changeColor(color)" [style.background-color]="color">
        </div>
    `,
    styles: [`
    div {
        height: 100px;
        width: 100px;
    }`]
})
export class Box {
    color: string;
    changecolor = new EventEmitter();

    ready() {
        console.log("I'm ready");
    }

    mono() {
        console.log(`color was ${this.color}`);
        this.color = "gray";
    }

    changeColor (current:string) {
        console.log(`in changeColor with ${current}`);
        this.changecolor.next(this);
    }

    _colorCallback (newColor:string) {
        this.color = newColor;
    }
}
