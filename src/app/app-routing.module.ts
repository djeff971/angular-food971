import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './_components/home-page/home-page.component';
import { DetailComponent } from './_components/commercants/detail.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  { 
    path: 'detail', 
    component: DetailComponent 
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, DetailComponent]
