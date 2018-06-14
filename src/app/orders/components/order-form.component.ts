import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Movie} from '../../movies/models/movie';
import {Order} from '../models/order.model';

@Component({
  selector: 'app-order-form',
  template: `
    <h2>Create new order</h2>
    <form (ngSubmit)="submitOrder.emit(order); order = {id: null, address: null, phone: null, movieTitle: null}">
      <div class="form-group">
        <label>Address</label>
        <input type="text" class="form-control"  name="address" [(ngModel)]="order.address" placeholder="Full address...">
      </div>

      <div class="form-group">
        <label>Select Movie</label>
        <select class="form-control" name="movieTitle" [(ngModel)]="order.movieTitle">
          <option *ngFor="let movie of movies">{{ movie.Title }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Phone number</label>
        <input type="number" class="form-control" name="phone" [(ngModel)]="order.phone">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `
})
export class OrderFormComponent {

  @Input() movies: Movie[];
  @Output() submitOrder = new EventEmitter<Order>();

  public order: Order = {
    id: null,
    movieTitle: null,
    address: null,
    phone: null
  };

}
