# Angular Entrypoints Library 

This project is showing how to integrate secondary entrypoints parts of an Angular Library with NgRx Store within lazy loaded Modules.

## Build time

Every secondary entrypoint has a separate build that generates a dedicated js chunk.

## Load time

When needed, we can load such a module with a route, it will be lazy loaded.

```typescript
{
    path: 'orders',
    loadChildren: () =>
      import('ng-core/orders').then((m) => m.OrdersModule),
  },
```

## Code interactions

When we try to call a code of the secondary entrypoint from the main application, like a service or a store action or selector, it will break the chunk and put the code back in the main js bundle.

On the other hand, when we call a service of the main application from the secondary entrypoint, the lazy chunk remains intact.
