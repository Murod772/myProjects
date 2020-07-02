import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastLoadPage } from './past-load.page';

const routes: Routes = [
  {
    path: '',
    component: PastLoadPage
  },
  {
    path: 'past-details',
    loadChildren: () => import('./past-details/past-details.module').then( m => m.PastDetailsPageModule)
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
export class PastLoadPageRoutingModule {}
