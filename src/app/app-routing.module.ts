import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{
  path:'referensi',
  loadChildren:()=> import('./referensi/referensi.module').then(mod=>mod.ReferensiModule)
},


{
  path:'bersama',
  loadChildren:()=> import('./bersama/bersama.module').then(mod=>mod.BersamaModule)
},

{
  path: '',
  redirectTo: '/referensi',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
