import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSearchExamComponent } from './talent-search-exam.component';

describe('TalentSearchExamComponent', () => {
  let component: TalentSearchExamComponent;
  let fixture: ComponentFixture<TalentSearchExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSearchExamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentSearchExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
