import { createAction, props } from '@ngrx/store';
import { Order } from '../dto/order';

export const getOrders = createAction(
  '[Orders] Get Orders'
);

export const loadOrders = createAction(
  '[Orders] Load Orders',
  props<{ orders: Order[] }>()
);




