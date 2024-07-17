import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDesignComponent } from './logo-design.component';

describe('LogoDesignComponent', () => {
  let component: LogoDesignComponent;
  let fixture: ComponentFixture<LogoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
