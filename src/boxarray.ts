/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {Box} from './box';


@Component({
    selector: "box-array",
})
// NOTES:
// NgFor must be imported.
// * is used to delinate directives (note difference between Component & Directive) which manipulate the DOM.
// # is used to create a reference which can be used elsewhere in the template
// (changecolor) binds to Box's declared event to handle it as needed.
@View({
    template: `
        <div class="container-of-boxes noselect">
            <box *ng-for="#color of colors" color="{{ color }}" (changecolor)="doit($event)" class="noselect"></box>
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
        `,
        `
        .noselect {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        `
    ]
})
export class BoxArray {
    colors:Array<string>;

    constructor () {
        //this.colors = ["red", "green", "blue"];
        this.colors = ["cyan", "yellow", "magenta", "black"];
    }

    doit (box:any) {
        let loc = (this.colors.indexOf(box.color) + 1) % this.colors.length;
        box._colorCallback(this.colors[loc]);
    }
}
