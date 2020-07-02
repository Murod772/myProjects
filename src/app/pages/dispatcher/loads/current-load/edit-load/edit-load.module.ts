import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLoadPageRoutingModule } from './edit-load-routing.module';

import { EditLoadPage } from './edit-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLoadPageRoutingModule
  ],
  declarations: [EditLoadPage]
})
export class EditLoadPageModule {}
