import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import {AddOrder} from '../actions/order.actions';


@Component({
  selector: 'app-orders',
  template: `
    <div class="row">
      <div class="col">
        <app-order-form (submitOrder)="submitOrder($event)"></app-order-form>
      </div>
      <div class="col">
        <app-order-list></app-order-list>
      </div>
    </div>
  `,
})
export class OrdersComponent  {

  constructor(private store: Store<fromRoot.State>) {}

  submitOrder(order) {
    this.store.dispatch(new AddOrder({order: {...order, id: new Date().getMilliseconds()}}));
  }

}
