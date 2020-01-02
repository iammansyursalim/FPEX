import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihmingguPageRoutingModule } from './pilihminggu-routing.module';

import { PilihmingguPage } from './pilihminggu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihmingguPageRoutingModule
  ],
  declarations: [PilihmingguPage]
})
export class PilihmingguPageModule {}
