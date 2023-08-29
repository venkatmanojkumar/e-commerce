import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'admin-dash',
    component: AdminDashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashRoutingModule {}
