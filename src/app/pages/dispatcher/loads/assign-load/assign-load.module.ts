import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignLoadPageRoutingModule } from './assign-load-routing.module';

import { AssignLoadPage } from './assign-load.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AssignLoadPageRoutingModule
  ],
  declarations: [AssignLoadPage]
})
export class AssignLoadPageModule {}
