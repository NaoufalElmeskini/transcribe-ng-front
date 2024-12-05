import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { DisplayTranscriptComponent } from './display-transcript/display-transcript.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UploadComponent, DisplayTranscriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'ng-observable-rxjs';
  fileUploaded: any;

  updateFile($event: any) {
    this.fileUploaded = $event;
  }



}
