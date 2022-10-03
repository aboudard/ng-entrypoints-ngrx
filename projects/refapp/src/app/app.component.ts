import { Component } from '@angular/core';
import { getOrders } from '@cit/ng-core/orders';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'refapp';
  
  constructor(
    private store: Store
  ) {
    // this.store.dispatch(getOrders());
  }

}
