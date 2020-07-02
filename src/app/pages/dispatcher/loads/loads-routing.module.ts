import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadsPage } from './loads.page';

const routes: Routes = [
  {
    path: '',
    component: LoadsPage,
    children: [
      {
        path: 'current', 
        children: 
        [
          {
            path: '',
           loadChildren: () => import('./current-load/current-load.module').then(m => m.CurrentLoadPageModule)
          },
          {
            path: 'assign',
            loadChildren: () => import('./assign-load/assign-load.module').then(m => m.AssignLoadPageModule)
          },
          {
            path: 'edit/:loadId',
            loadChildren: () => import('./current-load/edit-load/edit-load.module').then(m => m.EditLoadPageModule)
          },
          {
            path: ':loadId',
            loadChildren: () => import('./current-load/current-details/current-details.module').then(m => m.CurrentDetailsPageModule)
          }
        ]
      },
      {
        path: 'past',
        children: [
          {
            path: '',
            loadChildren: () => import('./past-load/past-load.module').then(m => m.PastLoadPageModule)
          },
          {
            path: 'edit/:loadId',
            loadChildren: () => import('./past-load/edit-load/edit-load.module').then(m => m.EditLoadPageModule)
          },
          {
            path: ':loadId',
            loadChildren: () => import('./past-load/past-details/past-details.module').then(m => m.PastDetailsPageModule)
          }
        ]
      },
      {
        path: 'assign',
        children: [
          {
            path: '',
            loadChildren: () => import('./assign-load/assign-load.module').then(m => m.AssignLoadPageModule)
          },
        ]
      },
      // {
      //   path:'',
      //   redirectTo: './loads/current',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path:'',
  //   redirectTo: './loads/current',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadsPageRoutingModule {}