import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentLoadPageRoutingModule } from './current-load-routing.module';

import { CurrentLoadPage } from './current-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLoadPageRoutingModule
  ],
  declarations: [CurrentLoadPage]
})
export class CurrentLoadPageModule {}
