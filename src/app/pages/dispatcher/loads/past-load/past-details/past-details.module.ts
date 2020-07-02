import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastDetailsPageRoutingModule } from './past-details-routing.module';

import { PastDetailsPage } from './past-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastDetailsPageRoutingModule
  ],
  declarations: [PastDetailsPage]
})
export class PastDetailsPageModule {}
