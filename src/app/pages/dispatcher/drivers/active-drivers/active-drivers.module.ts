import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveDriversPageRoutingModule } from './active-drivers-routing.module';

import { ActiveDriversPage } from './active-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveDriversPageRoutingModule
  ],
  declarations: [ActiveDriversPage]
})
export class ActiveDriversPageModule {}
