import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './configurations/http-interceptor/http-interceptor';
import { NgModuleBasedLibraryModule } from './configurations/ng-module-based-library/ng-module-based-library.module';

const routes: Route[] = [
  { path: 'feature-a', loadChildren: () => import('./feature-a/feature-a.module').then((m) => m.FeatureAModule) },
  { path: 'feature-b', loadChildren: () => import('./feature-b/feature-b.module').then((m) => m.FeatureBModule) },
  { path: 'feature-c', loadChildren: () => import('./feature-c/feature-c.module').then((m) => m.FeatureCModule) },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), NgModuleBasedLibraryModule.forRoot()],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
