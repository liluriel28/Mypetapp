import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabdogPageRoutingModule } from './tabdog-routing.module';

import { TabdogPage } from './tabdog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabdogPageRoutingModule
  ],
  declarations: [TabdogPage]
})
export class TabdogPageModule {}
