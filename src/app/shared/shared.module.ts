import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableSelectComponent } from './table-select/table-select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableSearchComponent,
    TableSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TableSearchComponent,
    TableSelectComponent
  ]
})
export class SharedModule { }
