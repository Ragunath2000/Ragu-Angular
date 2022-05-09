import { ComponentFixture, TestBed } from '@angular/core/testing';

import { canceledreviewComponent } from './canceledreview.component';

describe('CanceledreviewComponent', () => {
  let component: canceledreviewComponent;
  let fixture: ComponentFixture<canceledreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ canceledreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(canceledreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
