import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMDemoComponent } from './dom-demo.component';

describe('DomDemoComponent', () => {
  let component: DOMDemoComponent;
  let fixture: ComponentFixture<DOMDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DOMDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOMDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
