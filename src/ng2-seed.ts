/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {Ng2SeedMenu} from './menu';
import {Box} from './box';

@Component({
    selector: 'ng2-seed-app',
    injectables: []})
@View({
    templateUrl: 'ng2-seed.html',
    directives: [Ng2SeedMenu, Box]
})
class Ng2SeedApp {
    text: string;

    constructor() {
        this.text = "foo";
    }
}
bootstrap(Ng2SeedApp);
