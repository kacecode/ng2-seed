/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'ng2-seed-app',
    injectables: []})
@View({
    templateUrl: 'ng2-seed.html',
    directives: []
})
class Ng2SeedApp {
    constructor() {

    }
}
bootstrap(Ng2SeedApp);