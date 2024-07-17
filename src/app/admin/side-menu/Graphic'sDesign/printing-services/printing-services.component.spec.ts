import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingServicesComponent } from './printing-services.component';

describe('PrintingServicesComponent', () => {
  let component: PrintingServicesComponent;
  let fixture: ComponentFixture<PrintingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintingServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
