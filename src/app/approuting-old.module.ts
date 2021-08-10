import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './_components/home-page/home-page.component';
import { DetailComponent } from './_components/commercants/detail.component';

const commercantsModule = () =>
  import('./_components/commercants/commercants.module').then(x => x.CommercantsModule);

const routes: Routes = [
  { path: 'detail', loadChildren: commercantsModule },
  { path: 'home', component: HomePageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingoldModule { }