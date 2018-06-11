import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './containers/auth.component';
import { SignInComponent } from './components/sign-in.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('auth', fromAuth.reducer), EffectsModule.forFeature([AuthEffects])],
  declarations: [AuthComponent, SignInComponent]
})
export class AuthModule { }
