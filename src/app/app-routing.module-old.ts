import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from '../app/_components/commercants/detail.component';

const routes: Routes = [
  { path: 's', component: AppComponent },
  { path: 'detail', component: DetailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {};

}
