import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMeBuilderPageRoutingModule } from './mini-me-builder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMeBuilderPageRoutingModule
  ]
})
export class MiniMeBuilderPageModule {}
