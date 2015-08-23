import {Component, View, bootstrap} from 'angular2/angular2';

// TODO: Setup TS loader for decorator support
/*@Component({
    selector: "app"
})
@View({
    template: `
        <h1>Hello!</h1>
        <p> {{ thing }}</p>
    `
})*/
class MyApp {
    constructor (thing_to_display) {
        this.thing = thing_to_display;
    }
}