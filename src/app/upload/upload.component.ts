import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit{
  file: any = 'initial';

  @Output()
  upload: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    this.upload.emit('from child with love');
  }

  updateFile($value: any) {
    this.file = $value.target.files[0];
    this.upload.emit(this.file);
  }

}
