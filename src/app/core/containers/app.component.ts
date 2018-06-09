import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from '../../reducers/index';
import * as fromCore from '../../core/reducers/core.reducer';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <main class="container">
      <router-outlet></router-outlet>
      <app-loader *ngIf="isLoading | async"></app-loader>
      <app-snackbar [notifications]="notifications | async"></app-snackbar>
    </main>

    <app-footer></app-footer>
  `,
})

export class AppComponent {

  isLoading: Observable<boolean> = this.store.select(fromCore.isLoading);
  notifications: Observable<string[]> = this.store.select(fromCore.getNotifications);

  constructor(private store: Store<fromRoot.State>) {

  }

}
