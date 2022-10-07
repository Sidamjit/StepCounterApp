import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepLengthSetterPage } from './step-length-setter.page';

const routes: Routes = [
  {
    path: '',
    component: StepLengthSetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepLengthSetterPageRoutingModule {}
