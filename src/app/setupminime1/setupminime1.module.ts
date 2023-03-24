import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Setupminime1PageRoutingModule } from './setupminime1-routing.module';

import { Setupminime1Page } from './setupminime1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Setupminime1PageRoutingModule
  ],
  declarations: [Setupminime1Page]
})
export class Setupminime1PageModule {}
