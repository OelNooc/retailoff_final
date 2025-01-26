import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastOnesPage } from './last-ones.page';

const routes: Routes = [
  {
    path: '',
    component: LastOnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastOnesPageRoutingModule {}
