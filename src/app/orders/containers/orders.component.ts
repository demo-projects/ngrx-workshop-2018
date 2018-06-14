import { Component, OnInit } from '@angular/core';

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

  submitOrder(order) {
    console.log(order);
  }

}
