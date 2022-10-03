import { Component, OnInit } from '@angular/core';
import { NgCoreService } from '@cit/ng-core';
import { Store } from '@ngrx/store';
import { getOrders } from './store/orders.actions';

@Component({
  selector: 'lib-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private store: Store,
    private coreService: NgCoreService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getOrders());
    console.log(this.coreService.getInfo());
  }

}
