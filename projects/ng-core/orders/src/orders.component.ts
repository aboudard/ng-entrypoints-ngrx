import { Component, OnInit } from '@angular/core';
import { NgCoreService } from 'ng-core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from './dto/order';
import { getOrders } from './store/orders.actions';
import { selectOrders } from './store/orders.selectors';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'lib-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe]
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  info$: Observable<string>;

  constructor(
    private store: Store,
    private coreService: NgCoreService
  ) {
    this.orders$ = this.store.select(selectOrders);
    // TODO: calling the root library service won't break the lazy loaded module
    this.info$ = this.coreService.getInfo();
  }

  ngOnInit(): void {
    this.store.dispatch(getOrders());
  }

}
