import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodySettingPageRoutingModule } from './body-setting-routing.module';

import { BodySettingPage } from './body-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodySettingPageRoutingModule
  ],
  declarations: [BodySettingPage]
})
export class BodySettingPageModule {}
