import { Component } from '@angular/core';
import { Book } from 'ng-core/books';
import { getOrders, selectOrdersCount } from 'ng-core/orders';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NgCoreComponent } from 'ng-core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLink, NgCoreComponent, RouterOutlet, AsyncPipe]
})
export class AppComponent {
  
  title = 'refapp';
  count$?: Observable<number>;
  book: Book;
  // count$ = this.store.select(selectOrdersCount);
  
  constructor(
    private store: Store
  ) {
    //TODO: Calling the ngrx components from the orders entrypoints creates a adherence and breaks the lazy loading
    // this.store.dispatch(getOrders());
    /* this.store.select(selectOrdersCount).subscribe(orders => {
      console.log(orders);
    }); */
    this.book = {
      id: 1,
      title: 'The Hobbit',
    }
  }

}
