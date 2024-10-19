import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { NgModuleBasedLibraryModule } from './configurations/ng-module-based-library/ng-module-based-library.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './configurations/http-interceptor/http-interceptor';

const routes: Route[] = [
  { path: 'feature-a', loadComponent: () => import('./feature-a/feature-a.component').then((m) => m.FeatureAComponent) },
  { path: 'feature-b', loadComponent: () => import('./feature-b/feature-b.component').then((m) => m.FeatureBComponent) },
  { path: 'feature-c', loadComponent: () => import('./feature-c/feature-c.component').then((m) => m.FeatureCComponent) }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
    importProvidersFrom(NgModuleBasedLibraryModule.forRoot())
  ],
};
