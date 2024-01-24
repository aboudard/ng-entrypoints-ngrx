import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // this route looks like lazy loaded, but it's part of the main bundle
  // because it's part of the main library entrypoint
  {
    path: 'home',
    loadChildren: () =>
      import('ng-core').then((m) => m.homeRoutes),
  },
  // this route is lazy loaded because it's in a separate module of the app
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('ng-core/orders').then((m) => m.OrdersModule)
  },
  // this route is lazy loaded because it's from a separate entrypoint of the library
  {
    path: 'books',
    loadChildren: () => import('ng-core/books').then((m) => m.booksRoutes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
