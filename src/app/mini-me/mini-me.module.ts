import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniMePageRoutingModule } from './mini-me-routing.module';

import { MiniMePage } from './mini-me.page';
import { MiniMeSetupPage } from '../mini-me/mini-me-setup/mini-me-setup.page';
import { MiniMeBuilderPage } from '../mini-me/mini-me-builder/mini-me-builder.page';
import { MiniMeConfirmPage } from '../mini-me/mini-me-confirm/mini-me-confirm.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniMePageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    MiniMePage,
    MiniMeSetupPage,
    MiniMeBuilderPage,
    MiniMeConfirmPage
  ]
})
export class MiniMePageModule { }
