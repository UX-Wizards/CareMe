import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineHomePageRoutingModule } from './routine-home-routing.module';

import { RoutineHomePage } from './routine-home.page';
import { RoutineEditPage } from '../routine-home/routine-edit/routine-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineHomePageRoutingModule
  ],
  declarations: [
    RoutineHomePage,
    RoutineEditPage
  ]
})
export class RoutineHomePageModule {}
