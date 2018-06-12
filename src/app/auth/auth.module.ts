import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './containers/auth.component';
import {SignInComponent} from './components/sign-in.component';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effects';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, StoreModule.forFeature('auth', fromAuth.reducer), EffectsModule.forFeature([AuthEffects])],
  declarations: [AuthComponent, SignInComponent],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {
}
