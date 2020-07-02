import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentLoadPage } from './current-load.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentLoadPage
  },
  {
    path: 'current-details',
    loadChildren: () => import('./current-details/current-details.module').then( m => m.CurrentDetailsPageModule)
  },
  {
    path: 'edit-load',
    loadChildren: () => import('./edit-load/edit-load.module').then( m => m.EditLoadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentLoadPageRoutingModule {}
