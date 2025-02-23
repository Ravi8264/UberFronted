import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFeedbackComponent } from './rating-feedback.component';

describe('RatingFeedbackComponent', () => {
  let component: RatingFeedbackComponent;
  let fixture: ComponentFixture<RatingFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
