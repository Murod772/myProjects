import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLoadPage } from './edit-load.page';

const routes: Routes = [
  {
    path: '',
    component: EditLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLoadPageRoutingModule {}
