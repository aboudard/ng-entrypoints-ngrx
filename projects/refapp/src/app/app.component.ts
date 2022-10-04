import { Component } from '@angular/core';
import { selectOrdersCount } from '@cit/ng-core/orders';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'refapp';
  count$?: Observable<number>;
  //count$ = this.store.select(selectOrdersCount);
  
  constructor(
    private store: Store
  ) {
    // Calling the ngrx components from the orders entrypoints creates a adherence and breaks the lazy loading
    // this.store.dispatch(getOrders());
    /* this.store.select(selectOrdersCount).subscribe(orders => {
      console.log(orders);
    }); */
  }

}
