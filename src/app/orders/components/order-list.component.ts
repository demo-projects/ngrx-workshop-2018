import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';

@Component({
  selector: 'app-order-list',
  template: `
    <h2>Order List</h2>
    <ul class="list-group">
      <li *ngFor="let order of orders" class="list-group-item">Cras justo odio <span class="close">x</span> </li>
    </ul>
  `,
  styles: []
})
export class OrderListComponent  {

  @Input() orders: Order[];

}
