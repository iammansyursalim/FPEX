import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihmingguPage } from './pilihminggu.page';

const routes: Routes = [
  {
    path: '',
    component: PilihmingguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihmingguPageRoutingModule {}
