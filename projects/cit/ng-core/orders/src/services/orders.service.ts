import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../dto/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of([
      {
        id: 1,
        orderNumber: '123',
        orderDate: new Date()
      },
      {
        id: 2,
        orderNumber: '456',
        orderDate: new Date()
      }
    ]);
  }

}
