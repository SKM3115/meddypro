import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrailPageRoutingModule } from './trail-routing.module';

import { TrailPage } from './trail.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailPageRoutingModule,
    HttpClientModule 
  ],
  declarations: [TrailPage]
})
export class TrailPageModule {}
