import { Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { StoreModule } from "@ngrx/store";
import { booksFeatureKey, reducer } from "./store/reducers";
import { importProvidersFrom } from "@angular/core";

export const booksRoutes: Routes = [
    {
        path: '',
        component: BooksComponent,
        providers: [
            importProvidersFrom(
                StoreModule.forFeature(booksFeatureKey, reducer)
            )
        ],
        title: 'Books'
    }
];
