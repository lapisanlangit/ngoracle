import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KppnComponent } from './kppn/kppn.component';
import { ReferensiComponent } from './referensi.component';
import { ReferensiRoutingModule } from './referensi-routing';
import { KppnService } from './kppn/kppn.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    KppnComponent,
    ReferensiComponent,
    
  ],
  imports: [
    CommonModule,
    ReferensiRoutingModule,
    HttpClientModule
  ],
  providers:[
    KppnService
  ]
})
export class ReferensiModule { }
