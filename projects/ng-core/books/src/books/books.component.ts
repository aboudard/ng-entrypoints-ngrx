import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks } from '../store/selectors';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
    selector: 'lib-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
    imports: [
      NgFor, AsyncPipe
    ],
    standalone: true
})
export class BooksComponent {
  title = 'Books component from library';
  books$ = inject(Store).select(selectBooks);
}
