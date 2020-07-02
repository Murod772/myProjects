import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastLoadPageRoutingModule } from './past-load-routing.module';

import { PastLoadPage } from './past-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastLoadPageRoutingModule
  ],
  declarations: [PastLoadPage]
})
export class PastLoadPageModule {}
