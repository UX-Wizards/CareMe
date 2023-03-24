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
  },
  {
    path: 'mini-me-confirm',
    loadChildren: () => import('./mini-me-confirm/mini-me-confirm.module').then( m => m.MiniMeConfirmPageModule)
  },
  {
    path: 'mini-me-builder',
    loadChildren: () => import('./mini-me-builder/mini-me-builder.module').then( m => m.MiniMeBuilderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniMePageRoutingModule {}
