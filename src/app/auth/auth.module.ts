import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './containers/auth.component';
import {SignInComponent} from './components/sign-in.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthComponent, SignInComponent],
  providers: [],
})
export class AuthModule {
}
