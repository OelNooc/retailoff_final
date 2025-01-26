import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastOnesPageRoutingModule } from './last-ones-routing.module';

import { LastOnesPage } from './last-ones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastOnesPageRoutingModule
  ],
  declarations: [LastOnesPage]
})
export class LastOnesPageModule {}
