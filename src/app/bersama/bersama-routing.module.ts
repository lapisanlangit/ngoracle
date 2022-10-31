import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BersamaComponent } from './bersama.component';

const routes: Routes = [
  {
    path: '',
    component: BersamaComponent,
    children: [
      
{
  path:'ref',
  loadChildren:()=> import('./ref/ref.module').then(mod=>mod.RefModule)
},
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BersamaRoutingModule { }
