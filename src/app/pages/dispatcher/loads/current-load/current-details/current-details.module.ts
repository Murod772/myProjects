import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentDetailsPageRoutingModule } from './current-details-routing.module';

import { CurrentDetailsPage } from './current-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentDetailsPageRoutingModule
  ],
  declarations: [CurrentDetailsPage]
})
export class CurrentDetailsPageModule {}
