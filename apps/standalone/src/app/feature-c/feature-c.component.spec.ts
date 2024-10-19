import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCComponent } from './feature-c.component';

describe('FeatureCComponent', () => {
  let component: FeatureCComponent;
  let fixture: ComponentFixture<FeatureCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
