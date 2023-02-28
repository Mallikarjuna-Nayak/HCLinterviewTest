import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ImageUploadService} from './imageupload.service';

import { Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interviewHCL';
  
  form: FormGroup;
  constructor(public fb: FormBuilder, public imageUploadService: ImageUploadService ){
	this.form = this.fb.group({
		image: [null]
	})
  }
  
  uploadFile(event:any){
	const file = event.target.files ? event.target.files[0]: '';
	//console.log(file);
	this.form.patchValue({
		image:file
	});
	this.form.get("image")?.updateValueAndValidity()
  }
  
  submitImage(){
	this.imageUploadService.imageUpload(this.form.value.image).subscribe((data:any) => {
		//console.log('AAA');
	},
	/* error => {
		
	} */);
  }

  
}
