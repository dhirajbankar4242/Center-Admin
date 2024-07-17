import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsMarketingComponent } from './sms-marketing.component';

describe('SmsMarketingComponent', () => {
  let component: SmsMarketingComponent;
  let fixture: ComponentFixture<SmsMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsMarketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmsMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
