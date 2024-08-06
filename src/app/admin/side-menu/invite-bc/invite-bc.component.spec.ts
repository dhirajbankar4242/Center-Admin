import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteBcComponent } from './invite-bc.component';

describe('InviteBcComponent', () => {
  let component: InviteBcComponent;
  let fixture: ComponentFixture<InviteBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteBcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
