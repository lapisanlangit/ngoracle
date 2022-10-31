import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KppnComponent } from './kppn/kppn.component';
import { ReferensiComponent } from './referensi.component';


const routes: Routes = [
  {
    path: '',
    component: ReferensiComponent,
    children: [
      {
        path: 'kppn',
        component: KppnComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReferensiRoutingModule { }
