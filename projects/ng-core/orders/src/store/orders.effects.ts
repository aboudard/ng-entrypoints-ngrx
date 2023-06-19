import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as OrdersActions from './orders.actions';
import { OrdersService } from '../services/orders.service';


@Injectable()
export class OrdersEffects {


  loadOrders$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(OrdersActions.getOrders),
      /* map(action => OrdersActions.loadOrders({ orders: [
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
      ] })), */
      switchMap(() => this.ordersService.getOrders()
        .pipe(
          map((orders) => OrdersActions.loadOrders({ orders })),
          catchError(() => EMPTY as Observable<{ type: string }>)
        ))
    );
  });


  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
    ) {}

}
