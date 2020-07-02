import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversPage } from './drivers.page';

const routes: Routes = [
  {
    path: '',
    component: DriversPage,
    children: [
      {
        path: 'active',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./active-drivers/active-drivers.module').then(m => m.ActiveDriversPageModule)
          },
          {
            path: 'add',
            loadChildren: () => import('./add-driver/add-driver.module').then(m => m.AddDriverPageModule)
          },
          // {
          //   path: 'edit/:driverId',
          //   loadChildren: () => import('./active-drivers/edit-drivers/edit-drivers.module').then(m => m.EditDriversPageModule)
          // },
          // {
          //   path: ':driverId',
          //   loadChildren: () => import('./active-drivers/driver-details/driver-details.module').then(m => m.DriverDetailsPageModule)
          // }
        ]
      },
      {
        path: 'inactive',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./inactive-drivers/inactive-drivers.module').then(m => m.InactiveDriversPageModule)
          },
          // {
          //   path: 'edit/:driverId',
          //   loadChildren: () => import('./inactive-drivers/edit-driver/edit-driver.module').then(m => m.EditDriverPageModule)
          // },
          {
            path: ':driverId',
            loadChildren: () => import('./inactive-drivers/driver-details/driver-details.module').then(m => m.DriverDetailsPageModule)
          }
        ]
      },
      {
        path: 'add',
        children: 
        [
          {
            path: '',
            loadChildren: () => import('./add-driver/add-driver.module').then(m => m.AddDriverPageModule)
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversPageRoutingModule {}

