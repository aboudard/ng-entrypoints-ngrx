import { Action, createReducer, on } from '@ngrx/store';
import * as OrdersActions from './orders.actions';

export const ordersFeatureKey = 'orderstore';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(OrdersActions.loadOrders, (state, {orders}) => {
    return {...state, orders};
  }),
);
