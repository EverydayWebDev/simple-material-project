import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOneComponent } from './screen-one.component';

const routes: Routes = [
  { path: '', component: ScreenOneComponent }
];

@NgModule({
  declarations: [ScreenOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScreenOneModule { }
