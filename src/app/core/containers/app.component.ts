import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-header></app-header>-->

    <main class="container">
      <router-outlet></router-outlet>
      <!--<app-loader></app-loader>-->
      <!--<app-snackbar></app-snackbar>-->
    </main>

    <!--<app-footer></app-footer>-->
  `,
})

export class AppComponent {}
