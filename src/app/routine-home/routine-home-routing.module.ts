import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineHomePage } from './routine-home.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineHomePageRoutingModule {}
