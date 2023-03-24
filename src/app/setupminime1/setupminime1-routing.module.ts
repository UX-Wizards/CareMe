import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Setupminime1Page } from './setupminime1.page';

const routes: Routes = [
  {
    path: '',
    component: Setupminime1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Setupminime1PageRoutingModule {}
