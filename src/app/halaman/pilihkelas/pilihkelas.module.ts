import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihkelasPageRoutingModule } from './pilihkelas-routing.module';

import { PilihkelasPage } from './pilihkelas.page';
import {RandomcolorModule} from 'angular-randomcolor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PilihkelasPageRoutingModule,
        RandomcolorModule
    ],
  declarations: [PilihkelasPage]
})
export class PilihkelasPageModule {}
