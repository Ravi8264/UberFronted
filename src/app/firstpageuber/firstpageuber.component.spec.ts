import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpageuberComponent } from './firstpageuber.component';

describe('FirstpageuberComponent', () => {
  let component: FirstpageuberComponent;
  let fixture: ComponentFixture<FirstpageuberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstpageuberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpageuberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
