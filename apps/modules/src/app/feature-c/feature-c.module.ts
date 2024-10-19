import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureCComponent } from './feature-c.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: FeatureCComponent}
]

@NgModule({
  declarations: [FeatureCComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class FeatureCModule {}
