import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFranchiseComponent } from './give-franchise.component';

describe('GiveFranchiseComponent', () => {
  let component: GiveFranchiseComponent;
  let fixture: ComponentFixture<GiveFranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveFranchiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiveFranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
