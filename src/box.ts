/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View} from 'angular2/angular2';


@Component({
    selector: "box"
})
@View({
    template: `
        <div>
        </div>
    `,
    styles: [`
    div {
        height: 100px;
        width: 100px;
        background-color: orange;
    }`]
})
export class Box {
    color: string;

    mono() {
        this.color = "gray";
    }
}
