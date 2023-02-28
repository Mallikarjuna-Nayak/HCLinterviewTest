import { Component, OnInit } from '@angular/core';
import {ImageUploadService} from '../imageupload.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  resultData:any;
  constructor(private imageuploadservice: ImageUploadService){ }
  ngOnInit(): void{
    this.imageuploadservice.getListData().subscribe(
      (result:any) => {
      //console.log(result);
      this.resultData = result.data;
    });
  }

  deleteRec(resdata:any){
    this.imageuploadservice.deleteRec(resdata.id).subscribe(
      (data:any)=>{
        this.resultData = this.resultData.filter((u: any) => u !== resdata);
      }
    );
  }

}
