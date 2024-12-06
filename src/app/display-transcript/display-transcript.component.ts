import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-display-transcript',
  imports: [],
  templateUrl: './display-transcript.component.html',
  styleUrl: './display-transcript.component.css'
})
export class DisplayTranscriptComponent {
  @Input()
  file: any;

  transcript = '';

}
