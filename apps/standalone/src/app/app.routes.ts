import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-a',
    loadComponent: () => import('./feature-a/feature-a.component').then((m) => m.FeatureAComponent)
  },
  {
    path: 'feature-b',
    loadComponent: () => import('./feature-b/feature-b.component').then((m) => m.FeatureBComponent)
  },
  {
    path: 'feature-c',
    loadComponent: () => import('./feature-c/feature-c.component').then((m) => m.FeatureCComponent)
  }
];
