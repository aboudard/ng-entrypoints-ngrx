import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
    imports: [
        CommonModule,
        OrdersRoutingModule,
        OrdersComponent
    ]
})
export class OrdersModule {
  
}
