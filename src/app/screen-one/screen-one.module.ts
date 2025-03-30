import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOneComponent } from './screen-one.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: '', component: ScreenOneComponent }
];

@NgModule({
  declarations: [ScreenOneComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class ScreenOneModule { }
