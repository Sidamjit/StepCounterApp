import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepLengthSetterPageRoutingModule } from './step-length-setter-routing.module';

import { StepLengthSetterPage } from './step-length-setter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepLengthSetterPageRoutingModule
  ],
  declarations: [StepLengthSetterPage]
})
export class StepLengthSetterPageModule {}
