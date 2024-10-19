import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {}
