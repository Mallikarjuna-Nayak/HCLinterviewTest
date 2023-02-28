import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable,of, from } from 'rxjs';
/* import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; */
import {listViewData} from './listview';

@Injectable({
	providedIn: 'root'
})

export class ImageUploadService{
	constructor(private http: HttpClient){ 	}

	baseUrl = "http://localhost/interviewTestHCL/"; // PHP REST API base URL
	
	imageUpload(csvFile:File): Observable<any>{
		var formData: any = new FormData();
		formData.append("fileToUpload", csvFile);
		console.log(formData);
		return this.http.post<any>('http://localhost/interviewTestHCL/upload.php', formData);
	}

	getListData(){
		return this.http.get<listViewData[]>(this.baseUrl+"list_view.php");
	}
	
	getDataById(id:any){
		return this.http.get<listViewData[]>(this.baseUrl+"view.php?id=" + id);
	}

	deleteRec(id:any){
		return this.http.delete(this.baseUrl+"deleteRec.php?id=" + id);
	}
	
	createUser(userData:any){
		return this.http.post(this.baseUrl+"insert.php", userData);
	}
	
	editUser(userData:any){
		return this.http.put(this.baseUrl+"edit.php", userData);
	}
	
}