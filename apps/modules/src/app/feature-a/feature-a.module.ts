import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureAComponent } from './feature-a.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: FeatureAComponent }
]

@NgModule({
  declarations: [FeatureAComponent],
  imports: [RouterModule.forChild(routes), SharedModule]
})
export class FeatureAModule {}
