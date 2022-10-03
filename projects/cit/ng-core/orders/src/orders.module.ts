import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromOrders from './store/orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './store/orders.effects';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature(fromOrders.ordersFeatureKey, fromOrders.reducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class OrdersModule { }
