import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './orders.effects';
import { ordersFeatureKey, reducer } from './orders.reducer';
import { getOrders } from './orders.actions';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(ordersFeatureKey, reducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class StoreOrdersModule {
  constructor(
    private store: Store
  ) {
    this.store.dispatch(getOrders());
    console.log('OrdersModule loaded');
  }
}
