import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifactionofrideComponent } from './notification.component';

describe('NotifactionofrideComponent', () => {
  let component: NotifactionofrideComponent;
  let fixture: ComponentFixture<NotifactionofrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifactionofrideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifactionofrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
