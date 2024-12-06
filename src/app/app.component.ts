import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayTranscriptComponent } from './display-transcript/display-transcript.component';
import { DOMDemoComponent } from './dom-demo/dom-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { InteractionParentChildComponent } from './interaction-parent-child/interaction-parent-child.component';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UploadComponent, DisplayTranscriptComponent, FormDemoComponent, DOMDemoComponent, InteractionParentChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
