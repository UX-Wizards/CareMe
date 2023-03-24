import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniMeBuilderPage } from './mini-me-builder.page';

const routes: Routes = [
  {
    path: '',
    component: MiniMeBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniMeBuilderPageRoutingModule {}
