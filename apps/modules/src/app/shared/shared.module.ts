import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ImageComponent } from './image/image.component';
import { TitleComponent } from './image/title/title.component';

@NgModule({
  declarations: [AboutComponent, ImageComponent, TitleComponent],
  exports: [AboutComponent, ImageComponent],
})
export class SharedModule {}
