import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { ListDataComponent } from './list-data/list-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { AddDataComponent } from './add-data/add-data.component';



@NgModule({
  declarations: [
    AppComponent,
    CsvUploadComponent,
    ListDataComponent,
    EditDataComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
