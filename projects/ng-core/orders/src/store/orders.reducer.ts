import { Action, createReducer, on } from '@ngrx/store';
import { Order } from '../dto/order';
import * as OrdersActions from './orders.actions';

export const ordersFeatureKey = 'orderstore';

export interface OrdersState {
  orders: Order[];
}

export const initialState: OrdersState = {
  orders: []
};

export const reducer = createReducer(
  initialState,
  on(OrdersActions.loadOrders, (state, {orders}) => {
    return {...state, orders};
  }),
);
