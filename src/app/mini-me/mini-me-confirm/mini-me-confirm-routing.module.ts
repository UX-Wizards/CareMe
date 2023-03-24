import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniMeConfirmPage } from './mini-me-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: MiniMeConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniMeConfirmPageRoutingModule {}
