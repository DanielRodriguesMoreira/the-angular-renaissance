import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';

@Injectable()
class TestService {}

@NgModule({})
export class NgModuleBasedLibraryModule {
  static forRoot(): ModuleWithProviders<NgModuleBasedLibraryModule> {
    return {
      ngModule: NgModuleBasedLibraryModule,
      providers: [TestService]
    };
  }
}
