import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ServerComponent,
    ApplicationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
