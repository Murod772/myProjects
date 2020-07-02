import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InactiveDriversPage } from './inactive-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: InactiveDriversPage
  },
  {
    path: 'driver-details',
    loadChildren: () => import('./driver-details/driver-details.module').then( m => m.DriverDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactiveDriversPageRoutingModule {}
