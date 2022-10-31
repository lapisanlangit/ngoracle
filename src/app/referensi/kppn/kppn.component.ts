import { Component, OnInit } from '@angular/core';
import { KPPN } from './kppn';
import { KppnService } from './kppn.service';

@Component({
  selector: 'app-kppn',
  templateUrl: './kppn.component.html',
  styleUrls: ['./kppn.component.css']
})
export class KppnComponent implements OnInit {


  public listKPPN:KPPN[] | undefined;
  

  constructor(private kppnservice:KppnService) { }

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
