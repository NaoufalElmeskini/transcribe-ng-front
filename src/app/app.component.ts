import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { DisplayTranscriptComponent } from './display-transcript/display-transcript.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UploadComponent, DisplayTranscriptComponent, FormDemoComponent],
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
