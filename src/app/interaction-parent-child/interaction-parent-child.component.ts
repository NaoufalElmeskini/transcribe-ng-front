import { Component } from '@angular/core';
import { DisplayTranscriptComponent } from '../display-transcript/display-transcript.component';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'interaction-parent-child',
  imports: [DisplayTranscriptComponent, UploadComponent],
  templateUrl: './interaction-parent-child.component.html',
  styleUrl: './interaction-parent-child.component.css'
})
export class InteractionParentChildComponent {
  fileUploaded: any;

  updateFile($event: any) {
    this.fileUploaded = $event;
  }

}
