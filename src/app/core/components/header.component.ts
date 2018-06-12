import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Begin Header -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">My Movie Collection</a>

          <span class="navbar-text" (click)="logout.emit()">Logout</span>

          <!-- Begin Search -->
          <form class="form-inline">
            <input class="form-control" placeholder="Search...">
          </form>

        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent  {

  @Output() logout = new EventEmitter();

}
