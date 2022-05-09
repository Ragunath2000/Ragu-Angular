import { ComponentFixture, TestBed } from '@angular/core/testing';
import { completedreviewlistComponent } from './completedreviewlist.component';


describe('CompletedreviewlistComponent', () => {
  let component: completedreviewlistComponent;
  let fixture: ComponentFixture<completedreviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ completedreviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(completedreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
