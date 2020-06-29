import { Component, OnInit } from '@angular/core';
import { GiapitService } from 'src/app/serves/giapit.service';



@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  Countrys = ['Israel', 'New  york',
    'Canada', 'Australia'];

  model = new person(18, 'Name', 'Last Name', this.Countrys[0]);

  persons=[]


  apicronaviros: object
  constructor() { }


  ngOnInit(): void {


  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  newPerson() {
    this.model = new person(42, '', '');
    console.log(this.model);
  }

  addmodel(model:person){
    console.log("addmodel(heroForm.form.value)",model);
    
    this.persons.push(model)
  }

}


export class person {

  constructor(
    public id: number,
    public name: string,
    public LastName: string,
    public Country?: string
  ) { }

}