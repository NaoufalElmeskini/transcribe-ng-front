import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTranscriptComponent } from './display-transcript.component';

describe('DisplayTranscriptComponent', () => {
  let component: DisplayTranscriptComponent;
  let fixture: ComponentFixture<DisplayTranscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTranscriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
