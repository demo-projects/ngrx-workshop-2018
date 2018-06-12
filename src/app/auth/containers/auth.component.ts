import {Component} from '@angular/core';
import {Authenticate} from '../models/user';
import {Login} from '../actions/auth.actions';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-auth',
  template: `
    <app-sign-in (authSubmit)="login($event)"></app-sign-in>
  `,
})
export class AuthComponent {

  constructor(private store: Store<fromRoot.State>) {}

  login(userAuth: Authenticate) {
    this.store.dispatch(new Login(userAuth));
  }

}
