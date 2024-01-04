import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailPage } from './trail.page';
 // Check the correct file path and casing


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
