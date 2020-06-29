import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './compns/c1/c1.component';
import { C2Component } from './compns/c2/c2.component';
import { C3Component } from './compns/c3/c3.component';
import { NewsComponent } from './compns/news/news.component';
import { AbputComponent } from './compns/abput/abput.component';


const routes: Routes = [
  {
    path: 'home', component: C1Component,
    children: [

      { path: 'News', component: NewsComponent },
      { path: 'contact', component: C2Component },
      { path: 'about', component: AbputComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: 'db', component: C2Component },
  { path: 'contact', component: C3Component },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
