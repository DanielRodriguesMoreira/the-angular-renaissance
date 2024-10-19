import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../shared/about/about.component';
import { ImageComponent } from '../shared/image/image.component';
import { AlternateCasePipe } from '../shared/pipes/alternate-case.pipe';

@Component({
  selector: 'app-feature-b',
  standalone: true,
  imports: [CommonModule, AboutComponent, ImageComponent, AlternateCasePipe],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.scss',
})
export class FeatureBComponent {}
