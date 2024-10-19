import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeatureBComponent } from './feature-b.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: FeatureBComponent }
]

@NgModule({
  declarations: [FeatureBComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class FeatureBModule {}
