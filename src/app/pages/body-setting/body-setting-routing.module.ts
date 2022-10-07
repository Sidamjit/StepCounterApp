import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodySettingPage } from './body-setting.page';

const routes: Routes = [
  {
    path: '',
    component: BodySettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodySettingPageRoutingModule {}
