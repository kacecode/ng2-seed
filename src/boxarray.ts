/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {Box} from './box';


@Component({
    selector: "box-array",
})
@View({
    template: `
        <div class="container-of-boxes">
            <box *ng-for="#color of colors" color="{{ color }}"></box>
        </div>
    `,
    directives: [Box, NgFor],
    styles: [
        `
        .container-of-boxes {
            display: flex;
        }
        `,
        `
        box {
            margin: 5px;
        }
        `
    ]
})
export class BoxArray {
    colors:Array<string>;

    constructor () {
        this.colors = ["red", "green", "blue"];
    }

    parentClicked(color:string) {
        console.log(`child's color was ${color}`);
    }

    doit () {
        console.log('yep');
    }
}