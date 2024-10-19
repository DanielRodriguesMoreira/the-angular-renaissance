import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../shared/image/image.component';
import { AlternateCasePipe } from '../shared/pipes/alternate-case.pipe';

@Component({
  selector: 'app-feature-c',
  standalone: true,
  imports: [CommonModule, ImageComponent, AlternateCasePipe],
  templateUrl: './feature-c.component.html',
  styleUrl: './feature-c.component.scss',
})
export class FeatureCComponent {}
