import { Component, OnInit } from '@angular/core';
import { GiapitService } from 'src/app/serves/giapit.service';
import { ObjApi } from 'src/app/obj-api';


@Component({
  selector: 'app-abput',
  templateUrl: './abput.component.html',
  styleUrls: ['./abput.component.css']
})
export class AbputComponent implements OnInit {


  apicronaviros: ObjApi
  apicronisrael: ObjApi[]=[]

  constructor(private myser: GiapitService) { }


  ngOnInit(): void {


    this.myser.httpget(this.myser.url.israel).subscribe(strgRes => {
      console.log('rspons israel ++++++' + strgRes);
      this.apicronisrael.push(strgRes)
    });
  

    this.myser.httpget(this.myser.url.World).subscribe(strgRes => {
      console.log('this is rspons ++++++++' + strgRes);
      this.apicronaviros = strgRes
    });

    

  }
}