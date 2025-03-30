import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreenTwoComponent } from './screen-two.component';

const routes: Routes = [
  { path: '', component: ScreenTwoComponent }
];

@NgModule({
  declarations: [ScreenTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScreenTwoModule { }
