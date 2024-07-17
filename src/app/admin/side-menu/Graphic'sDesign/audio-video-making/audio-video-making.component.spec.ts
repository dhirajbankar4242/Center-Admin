import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoMakingComponent } from './audio-video-making.component';

describe('AudioVideoMakingComponent', () => {
  let component: AudioVideoMakingComponent;
  let fixture: ComponentFixture<AudioVideoMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioVideoMakingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioVideoMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
