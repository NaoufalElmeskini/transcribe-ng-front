import { Component, ElementRef, EventEmitter, NgModule, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'form-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent implements OnInit, OnDestroy {
  file: any = '';
  lastName!: FormControl;
  message = 'default';

  @Output()
  upload: EventEmitter<any> = new EventEmitter();

  private destroy$ = new Subject<void>();


  ngOnInit() {
    this.upload.emit('from child with love');
    this.lastName = new FormControl('');
    this.lastName.addValidators(this.totoValidator);

    this.lastName.setValue('tot');
    this.lastName.valueChanges.subscribe(this.loggingObserver);
  }

  totoValidator = (control: AbstractControl) => {
    let value = control.value;
    if (value == 'toto') {
      this.message = 'not valid!';
    } else {
      this.message = 'valid :)';

    }
    return null;
  };

  loggingObserver = (newName: any) => {
    console.log('lastName: ' + newName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
