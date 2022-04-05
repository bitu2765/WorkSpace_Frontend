import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanselectionComponent } from './planselection.component';

describe('PlanselectionComponent', () => {
  let component: PlanselectionComponent;
  let fixture: ComponentFixture<PlanselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
