/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View} from 'angular2/angular2';


@Component({
    selector: "box",
    properties: [
        "color",
    ]
})
@View({
    template: `
        <div (click)="mono()" [style.background-color]="color">
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

    ready() {
        console.log("I'm ready");
    }

    mono() {
        console.log(`color was ${this.color}`);
        this.color = "gray";
    }
}
