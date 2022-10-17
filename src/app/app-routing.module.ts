import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultsComponent } from './defaults/defaults.component';

const routes: Routes = [
  { path: '', component: DefaultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
