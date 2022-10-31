import { Component, OnInit } from '@angular/core';
import { KPPN } from 'src/app/referensi/kppn/kppn';
import { KpnService } from './kpn.service';

@Component({
  selector: 'app-kpn',
  templateUrl: './kpn.component.html',
  styleUrls: ['./kpn.component.css']
})
export class KpnComponent implements OnInit {


  public listKPPN:KPPN[] | undefined;
  

  constructor(private kppnservice:KpnService) { }

  ngOnInit(): void {


    this.kppnservice.getKPPN().subscribe({
      next:(data)=>{
        this.listKPPN=data;
        console.log(this.listKPPN)


      },
      error: (error) => {
        console.log(error);
   
        return;
      }
    })
  }
}
