import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { OrdersComponent } from './containers/orders.component';
import { OrderFormComponent } from './components/order-form.component';
import { OrderListComponent } from './components/order-list.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromOrder from './reducers/order.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: OrdersComponent}
    ]),
    StoreModule.forFeature('order', fromOrder.reducer)
  ],
  declarations: [OrdersComponent, OrderFormComponent, OrderListComponent]
})
export class OrdersModule { }
