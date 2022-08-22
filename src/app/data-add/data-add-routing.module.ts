import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataAddPage } from './data-add.page';

const routes: Routes = [
  {
    path: '',
    component: DataAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataAddPageRoutingModule {}
