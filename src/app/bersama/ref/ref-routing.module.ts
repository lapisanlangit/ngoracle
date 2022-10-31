import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpnComponent } from './kpn/kpn.component';
import { RefComponent } from './ref.component';

const routes: Routes = [
  {
    path: '',
    component: RefComponent,
    children: [
      {
        path: 'kpn',
        component: KpnComponent
      },
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefRoutingModule { }
