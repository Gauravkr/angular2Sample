import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {Login} from './components/login/login';
import {NamesList} from './services/NameList';


@Component({
    selector: 'app',
    viewBindings: [NamesList]
})
@RouteConfig([
    {path: '/', component: Home, as: 'home'},
    {path: '/login', component: Login, as: 'login'}
])
@View({
    templateUrl: './app.html',
    directives: [RouterOutlet, RouterLink]
})
class App {
}


bootstrap(App, [routerInjectables]);
