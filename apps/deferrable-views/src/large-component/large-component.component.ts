import { Component } from '@angular/core';

@Component({
  selector: 'app-large-component',
  standalone: true,
  styles: ['p { color: red; font-weight: bold; }'],
  template: '<p>I am a very large component!</p>',
})
export class LargeComponentComponent {}
