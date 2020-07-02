import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveDriversPage } from './active-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveDriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveDriversPageRoutingModule {}
