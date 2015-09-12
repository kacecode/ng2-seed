/// <reference path="./typings/angular2/angular2.d.ts"/>
/// <reference path="./typings/angular2/router.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Home} from './home';
import {BoxArray} from './boxarray';
import {ShoppingList} from './shopping-list';

@RouteConfig([
    { path: '/', component: Home, as: 'home' },
    { path: '/colors', component: BoxArray, as: 'color' },
    { path: '/shopping', component: ShoppingList, as: 'shop' }
])
@Component({
    selector: 'ng2-seed-app',
    injectables: []})
@View({
    templateUrl: 'ng2-seed.html',
    directives: [RouterOutlet, RouterLink],
    styleUrls: ['ng2-seed.css']
})
class Ng2SeedApp {}
bootstrap(Ng2SeedApp, [routerInjectables]);
