import {Component} from '@angular/core';
import {Authenticate} from '../models/user';

@Component({
  selector: 'app-auth',
  template: `
    <app-sign-in (authSubmit)="login($event)"></app-sign-in>
  `,
})
export class AuthComponent {

  // todo: inject store Store<fromRoot.state>

  login(userAuth: Authenticate) {
  //  todo: dispatch a login action
    console.log(userAuth);
  }

}
