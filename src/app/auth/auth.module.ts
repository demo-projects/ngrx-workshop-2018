import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './containers/auth.component';
import { SignInComponent } from './components/sign-in.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthComponent, SignInComponent]
})
export class AuthModule { }
