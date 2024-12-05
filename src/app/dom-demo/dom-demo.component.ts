import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dom-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './dom-demo.component.html',
  styleUrl: './dom-demo.component.css'
})
export class DOMDemoComponent {
  @ViewChild('divContainer')
  containerChild!: ElementRef<HTMLElement>;

  message = 'default';

  addParagraphInDom() {
    console.log('adding');
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'I am Mr. Meeseeks, look at me.';

    let container = document.getElementById("divContainer");
    container?.appendChild(newParagraph);
  }

  addSpanInDom() {
    console.log('adding');
    let newParagraph = document.createElement('span');
    newParagraph.innerHTML = 'life span.';

    this.containerChild.nativeElement.appendChild(newParagraph);
  }
}
