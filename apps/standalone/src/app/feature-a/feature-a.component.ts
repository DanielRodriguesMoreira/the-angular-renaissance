import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../shared/about/about.component';

@Component({
  selector: 'app-feature-a',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.scss',
})
export class FeatureAComponent {}
