import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOrders from './orders.reducer';

export const selectOrdersState = createFeatureSelector<fromOrders.OrdersState>(
  fromOrders.ordersFeatureKey
);

export const selectOrders = createSelector(
  selectOrdersState,
  (state: fromOrders.OrdersState) => state.orders
);

export const selectOrdersCount = createSelector(
  selectOrdersState,
  (state: fromOrders.OrdersState) => state.orders.length
);