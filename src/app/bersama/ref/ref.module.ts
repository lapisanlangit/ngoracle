import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefRoutingModule } from './ref-routing.module';
import { RefComponent } from './ref.component';
import { KpnComponent } from './kpn/kpn.component';
import { HttpClientModule } from '@angular/common/http';
import { KpnService } from './kpn/kpn.service';


@NgModule({
  declarations: [
    RefComponent,
    KpnComponent
  ],
  imports: [
    CommonModule,
    RefRoutingModule,
    HttpClientModule
  ],
  providers:[
    KpnService
  ]
})
export class RefModule { }
