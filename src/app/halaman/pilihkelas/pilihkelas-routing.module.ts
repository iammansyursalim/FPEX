import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihkelasPage } from './pilihkelas.page';

const routes: Routes = [
  {
    path: '',
    component: PilihkelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihkelasPageRoutingModule {}
