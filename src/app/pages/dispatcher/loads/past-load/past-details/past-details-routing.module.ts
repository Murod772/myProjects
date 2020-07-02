import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastDetailsPage } from './past-details.page';

const routes: Routes = [
  {
    path: '',
    component: PastDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastDetailsPageRoutingModule {}
