import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMeSetupPageRoutingModule } from './mini-me-setup-routing.module';

import { MiniMeSetupPage } from './mini-me-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMeSetupPageRoutingModule
  ],
  declarations: [MiniMeSetupPage]
})
export class MiniMeSetupPageModule {}
