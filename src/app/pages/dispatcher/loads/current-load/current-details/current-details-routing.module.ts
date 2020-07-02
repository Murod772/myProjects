import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentDetailsPage } from './current-details.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentDetailsPageRoutingModule {}
