import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageUploadService } from '../imageupload.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit{
	addForm:any;
	constructor(
	private formBuilder: FormBuilder,
	private router: Router,
	private imageuploadservice: ImageUploadService
	){
		this.addForm = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
			status: ['', Validators.required],
		})
	}
	
	ngOnInit():void{
		
	}
	
	onSubmit(){
		//console.log(this.addForm.value);
		this.imageuploadservice.createUser(this.addForm.value).subscribe(
		(data:any)=>{
			this.router.navigate(['/']);
		});
	}
	
	
}
