import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionParentChildComponent } from './interaction-parent-child.component';

describe('InteractionParentChildComponent', () => {
  let component: InteractionParentChildComponent;
  let fixture: ComponentFixture<InteractionParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionParentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
