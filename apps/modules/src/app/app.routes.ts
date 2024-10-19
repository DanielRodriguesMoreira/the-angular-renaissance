import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-a',
    loadChildren: () => import('./feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./feature-b/feature-b.module').then((m) => m.FeatureBModule),
  },
  {
    path: 'feature-c',
    loadChildren: () => import('./feature-c/feature-c.module').then((m) => m.FeatureCModule),
  },
];
