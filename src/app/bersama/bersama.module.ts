import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BersamaRoutingModule } from './bersama-routing.module';
import { BersamaComponent } from './bersama.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BersamaComponent
  ],
  imports: [
    CommonModule,
    BersamaRoutingModule,
    HttpClientModule
  ]
})
export class BersamaModule { }
