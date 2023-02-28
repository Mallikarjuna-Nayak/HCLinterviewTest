import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageUploadService } from '../imageupload.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
	addForm:any;
	edit_id:any;
	constructor(
	private formBuilder: FormBuilder,
	private router: Router,
	private imageuploadservice: ImageUploadService,
	private url: ActivatedRoute
	){
		this.addForm = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
			status: ['', Validators.required],
		})
	}
	
	ngOnInit():void{
		this.edit_id = this.url.snapshot.params['id'];
		//console.log(this.edit_id)
		if(this.edit_id>0)
		{
			this.imageuploadservice.getDataById(this.edit_id).subscribe(
			(data:any)=>{
				//console.log(data)
				this.addForm.patchValue(data.data);
			});
		}
	}
	
	onSubmit(){
		//console.log(this.addForm.value);
		this.imageuploadservice.createUser(this.addForm.value).subscribe(
		(data:any)=>{
			this.router.navigate(['/']);
		});
	}
	
	onEdit(){
		//console.log(this.addForm.value);
		this.imageuploadservice.editUser(this.addForm.value).subscribe(
		(data:any)=>{
			this.router.navigate(['/']);
		});
	}
}
