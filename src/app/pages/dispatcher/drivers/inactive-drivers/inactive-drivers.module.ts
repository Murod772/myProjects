import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactiveDriversPageRoutingModule } from './inactive-drivers-routing.module';

import { InactiveDriversPage } from './inactive-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactiveDriversPageRoutingModule
  ],
  declarations: [InactiveDriversPage]
})
export class InactiveDriversPageModule {}
