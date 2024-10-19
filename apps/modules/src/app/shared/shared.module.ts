import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ImageComponent } from './components/image/image.component';
import { TitleComponent } from './components/image/title/title.component';
import { AlternateCasePipe } from './pipes/alternate-case.pipe';

@NgModule({
  declarations: [
    AboutComponent,
    ImageComponent,
    TitleComponent,
    AlternateCasePipe,
  ],
  exports: [AboutComponent, ImageComponent, AlternateCasePipe],
})
export class SharedModule {}
