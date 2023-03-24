import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMeConfirmPageRoutingModule } from './mini-me-confirm-routing.module';

import { MiniMeConfirmPage } from './mini-me-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMeConfirmPageRoutingModule
  ],
  declarations: [MiniMeConfirmPage]
})
export class MiniMeConfirmPageModule {}
