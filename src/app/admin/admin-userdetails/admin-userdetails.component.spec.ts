import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserdetailsComponent } from './admin-userdetails.component';

describe('AdminUserdetailsComponent', () => {
  let component: AdminUserdetailsComponent;
  let fixture: ComponentFixture<AdminUserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
