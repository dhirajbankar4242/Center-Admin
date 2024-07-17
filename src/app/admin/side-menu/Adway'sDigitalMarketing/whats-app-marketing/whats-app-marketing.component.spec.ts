import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppMarketingComponent } from './whats-app-marketing.component';

describe('WhatsAppMarketingComponent', () => {
  let component: WhatsAppMarketingComponent;
  let fixture: ComponentFixture<WhatsAppMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsAppMarketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsAppMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
