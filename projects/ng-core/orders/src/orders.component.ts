import { Component, OnInit } from '@angular/core';
import { NgCoreService } from '@cit/ng-core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from './dto/order';
import { getOrders } from './store/orders.actions';
import { selectOrders } from './store/orders.selectors';

@Component({
  selector: 'lib-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  info$: Observable<string>;

  constructor(
    private store: Store,
    private coreService: NgCoreService
  ) {
    this.orders$ = this.store.select(selectOrders);
    this.info$ = this.coreService.getInfo();
  }

  ngOnInit(): void {
    this.store.dispatch(getOrders());
  }

}
