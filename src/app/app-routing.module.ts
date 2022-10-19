import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultsComponent } from './defaults/defaults.component';
import { ApplicationComponent } from './pages/application/application.component';
import { HomeComponent } from './pages/home/home.component';
import { ServerComponent } from './pages/server/server.component';

const routes: Routes = [
  {
    path: '', component: DefaultsComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'server', component: ServerComponent },
      { path: 'application', component: ApplicationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
