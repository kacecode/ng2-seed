/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

require('./styles/main.less');
import {Bar} from './esnext';


@Component({
    selector: "app",
    injectables: []
})
@View({
    template: `
        <h1>Hello!</h1>
        <p> {{ thing }}</p>
    `,
    directives: []
})
class MyApp {
    thing: string;

    constructor (thing_to_display) {
        console.log("in thing");
        this.thing = thing_to_display;
    }
}
bootstrap(MyApp);

var wat = new Bar("bilbo");
wat.announce();
console.log('foo');