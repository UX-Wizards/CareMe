import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniMePage } from './mini-me.page';

const routes: Routes = [
  {
    path: '',
    component: MiniMePage
  },
  {
    path: 'mini-me-setup',
    loadChildren: () => import('./mini-me-setup/mini-me-setup.module').then( m => m.MiniMeSetupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniMePageRoutingModule {}
