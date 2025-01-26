import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevScansPage } from './prev-scans.page';

const routes: Routes = [
  {
    path: '',
    component: PrevScansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevScansPageRoutingModule {}
