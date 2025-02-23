import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasSignInComponent } from './off-canvas-sign-in.component';

describe('OffCanvasSignInComponent', () => {
  let component: OffCanvasSignInComponent;
  let fixture: ComponentFixture<OffCanvasSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffCanvasSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
