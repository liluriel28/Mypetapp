import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabdogPage } from './tabdog.page';

const routes: Routes = [
  {
    path: '',
    component: TabdogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabdogPageRoutingModule {}
