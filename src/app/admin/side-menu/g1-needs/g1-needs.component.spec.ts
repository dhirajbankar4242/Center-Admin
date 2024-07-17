import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G1NeedsComponent } from './g1-needs.component';

describe('G1NeedsComponent', () => {
  let component: G1NeedsComponent;
  let fixture: ComponentFixture<G1NeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [G1NeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(G1NeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
