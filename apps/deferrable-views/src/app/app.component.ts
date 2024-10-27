import { Component } from '@angular/core';
import { LargeComponentComponent } from '../large-component/large-component.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [LargeComponentComponent],
  template: `
    <h1>Deferrable Views Demo</h1>

    <app-large-component data-testid="large-component" />
  `,
})
export class AppComponent {}
