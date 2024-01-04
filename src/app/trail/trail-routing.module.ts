import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailPageRoutingModule } from './TrailPage-routing.module'; // Check the correct file path and casing


const routes: Routes = [
  {
    path: '',
    component: TrailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailPageRoutingModule {}
