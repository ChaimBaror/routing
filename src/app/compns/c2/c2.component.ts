import { Component, OnInit } from '@angular/core';
import { person } from '../c3/c3.component';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor( ) { }

  ngOnInit(): void {

  }
  persons:person[]

  additme(itme:person){
    console.log("wath is itme ",itme);
    
    this.persons.push(itme)
  }

}
