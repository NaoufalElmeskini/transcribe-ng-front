import { Component, ElementRef, EventEmitter, NgModule, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'form-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent implements OnInit, OnDestroy{
  file: any = '';
  lastName = new FormControl('');
  message = 'default';

  @Output()
  upload: EventEmitter<any> = new EventEmitter();

  private destroy$ = new Subject<void>();

  
  ngOnInit() {
    this.upload.emit('from child with love');
    this.lastName.setValue('oldemort');
    this.lastName.valueChanges.subscribe(this.boredObserver);
    this.lastName.valueChanges.subscribe(this.godForbidObserver);
  }

  godForbidObserver =(newName: any) => {
    if (newName == 'voldemort') {
      this.message = 'not valid!! not valid!';
    } else {
      this.message = 'it s allright :)';
    }
    console.log('lastName: ' + newName);
  }

  boredObserver =(newName: any) => {
    if (newName == 'toto') {
      this.message = 'boring... not valid!';
    } else {
      this.message = 'it s allright :)';
    }
    console.log('lastName: ' + newName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
