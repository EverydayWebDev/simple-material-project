import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'screen-one', loadChildren: () => import('./screen-one/screen-one.module').then(m => m.ScreenOneModule) },
  { path: 'screen-two', loadChildren: () => import('./screen-two/screen-two.module').then(m => m.ScreenTwoModule) },
  { path: '', redirectTo: '/screen-one', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
