import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOrders from './orders.reducer';

export const selectOrdersState = createFeatureSelector<fromOrders.State>(
  fromOrders.ordersFeatureKey
);

export const selectOrders = createSelector(
  selectOrdersState,
  (state: fromOrders.State) => state.orders
);

export const selectOrdersCount = createSelector(
  selectOrdersState,
  (state: fromOrders.State) => state.orders.length
);