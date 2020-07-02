import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignLoadPage } from './assign-load.page';

const routes: Routes = [
  {
    path: '',
    component: AssignLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignLoadPageRoutingModule {}
