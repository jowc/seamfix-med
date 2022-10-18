import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DefaultsComponent } from './defaults.component';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    DefaultsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PagesModule
  ]
})
export class DefaultsModule { }
