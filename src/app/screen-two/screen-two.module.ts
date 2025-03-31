import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreenTwoComponent } from './screen-two.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ScreenTwoComponent }
];

@NgModule({
  declarations: [ScreenTwoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class ScreenTwoModule { }
