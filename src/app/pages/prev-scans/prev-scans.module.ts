import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevScansPageRoutingModule } from './prev-scans-routing.module';

import { PrevScansPage } from './prev-scans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevScansPageRoutingModule
  ],
  declarations: [PrevScansPage]
})
export class PrevScansPageModule {}
