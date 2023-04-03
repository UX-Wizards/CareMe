import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineEditPage } from './routine-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineEditPageRoutingModule {}
