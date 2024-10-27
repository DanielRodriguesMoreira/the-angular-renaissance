import { ComponentFixture, DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LargeComponentComponent } from '../large-component/large-component.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, LargeComponentComponent],

      // SET THE BEHAVIOUR -> Manual is the default option
      deferBlockBehavior: DeferBlockBehavior.Manual
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should show placeholder on init', () => {
    const placeholder = fixture.debugElement.query(getByTestid('placeholder'));
    expect(placeholder).not.toBeNull();
    expect(placeholder.nativeElement.textContent).toMatch('large component will be rendered here!');
  });

  it('should not show large component on init', () => {
    const largeComponent = fixture.debugElement.query(getByTestid('large-component'));
    expect(largeComponent).toBeNull();
  });

  it('should show the large component after render completes', async () => {
    // GETS THE FIRST DEFER BLOCK
    const deferBlock = (await fixture.getDeferBlocks())[0];

    // RENDERS THE BLOCK TO THE SPECIFIC STATE
    await deferBlock.render(DeferBlockState.Complete);

    const largeComponent = fixture.debugElement.query(getByTestid('large-component'));
    expect(largeComponent).not.toBeNull();

    const placeholder = fixture.debugElement.query(getByTestid('placeholder'));
    expect(placeholder).toBeNull();
  });
});


const getByTestid = (id: string) => {
  return By.css(`[data-testid="${id}"`);
}
