import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../shared/about/about.component';
import { ImageComponent } from '../shared/image/image.component';

@Component({
  selector: 'app-feature-b',
  standalone: true,
  imports: [CommonModule, AboutComponent, ImageComponent],
  templateUrl: './feature-b.component.html',
  styleUrl: './feature-b.component.scss',
})
export class FeatureBComponent {}
