import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMePageRoutingModule } from './mini-me-routing.module';

import { MiniMePage } from './mini-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMePageRoutingModule
  ],
  declarations: [MiniMePage]
})
export class MiniMePageModule {}
