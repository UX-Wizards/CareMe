import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMeBuilderPageRoutingModule } from './mini-me-builder-routing.module';

import { MiniMeBuilderPage } from './mini-me-builder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMeBuilderPageRoutingModule
  ],
  declarations: [MiniMeBuilderPage]
})
export class MiniMeBuilderPageModule {}
