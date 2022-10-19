import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerComponent } from './server/server.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    ServerComponent,
    ApplicationComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
