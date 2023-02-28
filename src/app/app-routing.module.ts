import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ListDataComponent } from './list-data/list-data.component';

export const routes: Routes = [
  { path: '', component: ListDataComponent, pathMatch: 'full' },
  { path: 'add-data', component: AddDataComponent },
  { path: 'edit/:id', component: EditDataComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
