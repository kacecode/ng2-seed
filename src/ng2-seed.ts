/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {Ng2SeedMenu} from './menu';
import {BoxArray} from './boxarray';
import {ShoppingList} from './shopping-list';

@Component({
    selector: 'ng2-seed-app',
    injectables: []})
@View({
    templateUrl: 'ng2-seed.html',
    directives: [Ng2SeedMenu, BoxArray, ShoppingList]
})
class Ng2SeedApp {
    text: string;

    constructor() {
        this.text = "foo";
    }
}
bootstrap(Ng2SeedApp);
