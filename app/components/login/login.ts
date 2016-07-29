import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'component-2'
})
@View({
    templateUrl: './components/login/login.html?v=<%= VERSION %>',
    styleUrls: ['./components/login/login.css'],
    directives: [NgFor]
})
export class Login {
    constructor() {

    }
    login(username, password) {
        console.log(username.value + " : " + password.value);
    }
}
