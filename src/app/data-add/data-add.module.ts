import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataAddPageRoutingModule } from './data-add-routing.module';

import { DataAddPage } from './data-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataAddPageRoutingModule
  ],
  declarations: [DataAddPage]
})
export class DataAddPageModule {}
