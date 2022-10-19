import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ApplicationTableComponent } from './application-table/application-table.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { ServeTableComponent } from './serve-table/serve-table.component';



@NgModule({
  declarations: [
    HomeTableComponent,
    ServeTableComponent,
    ApplicationTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeTableComponent,
    ServeTableComponent,
    ApplicationTableComponent,
  ]
})
export class ComponentsModule { }
