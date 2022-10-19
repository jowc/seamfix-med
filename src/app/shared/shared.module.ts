import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { TableSelectComponent } from './table-select/table-select.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { HealthCheckResultComponent } from './health-check-result/health-check-result.component';
import { HealthCheckResultSingleComponent } from './health-check-result-single/health-check-result-single.component';
import { DeactivateServerComponent } from './deactivate-server/deactivate-server.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateApplicationComponent } from './create-application/create-application.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableSearchComponent,
    TableSelectComponent,
    HealthCheckComponent,
    HealthCheckResultComponent,
    HealthCheckResultSingleComponent,
    DeactivateServerComponent,
    CreateServerComponent,
    CreateApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  exports: [
    HeaderComponent,
    TableSearchComponent,
    TableSelectComponent,
    HealthCheckComponent,
    HealthCheckResultComponent,
    HealthCheckResultSingleComponent,
    DeactivateServerComponent,
    CreateServerComponent,
    CreateApplicationComponent
  ]
})
export class SharedModule { }
