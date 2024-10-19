import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [AboutComponent, ImageComponent],
  exports: [AboutComponent, ImageComponent],
})
export class SharedModule {}
