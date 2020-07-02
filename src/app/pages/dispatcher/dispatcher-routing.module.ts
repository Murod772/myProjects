import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatcherPage } from './dispatcher.page';

const routes: Routes = [
  {
    path: '',
    component: DispatcherPage,
  },
  {
    path: 'loads',
    loadChildren: () => import('./loads/loads.module').then( m => m.LoadsPageModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./drivers/drivers.module').then( m => m.DriversPageModule)
  },
  {
    path: 'trailers',
    loadChildren: () => import('./trailers/trailers.module').then( m => m.TrailersPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispatcherPageRoutingModule {}
