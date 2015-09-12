/// <reference path="./typings/angular2/angular2.d.ts"/>
/// <reference path="./typings/angular2/http.d.ts"/>
import {Component, View, NgIf} from 'angular2/angular2';
//import {Http, Response} from 'angular2/http';


@Component({
    selector: 'ng2-seed-xhr'
})
@View({
    directives: [NgIf],
    template: `
      <h2>Pirates Yarrr!</h2>
      <input type="text" #message (keyup.enter)="submit(message.value)">
      <div *ng-if="response">
        <h3>Ye says...</h3>
        <p>{{ response }}</p>	
      </div>
    `
})
export class Pirates {
    url: string = "http://isithackday.com/arrpi.php";
    response: string;
    
    //constructor(public http: Http) {}

    submit(message: string) {
        console.log(message);
    }
}
