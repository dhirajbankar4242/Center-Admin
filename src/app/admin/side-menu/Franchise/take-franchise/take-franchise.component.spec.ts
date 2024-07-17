import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeFranchiseComponent } from './take-franchise.component';

describe('TakeFranchiseComponent', () => {
  let component: TakeFranchiseComponent;
  let fixture: ComponentFixture<TakeFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeFranchiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakeFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
