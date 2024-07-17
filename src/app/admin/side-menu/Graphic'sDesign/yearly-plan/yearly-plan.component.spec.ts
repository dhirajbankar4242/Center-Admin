import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyPlanComponent } from './yearly-plan.component';

describe('YearlyPlanComponent', () => {
  let component: YearlyPlanComponent;
  let fixture: ComponentFixture<YearlyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearlyPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearlyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
