import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlotDetailsComponent } from './admin-slot-details.component';

describe('AdminSlotDetailsComponent', () => {
  let component: AdminSlotDetailsComponent;
  let fixture: ComponentFixture<AdminSlotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSlotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
