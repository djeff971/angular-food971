import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
const accountModule = () =>
  import('./account/account.module').then(x => x.AccountModule);
const usersModule = () =>
  import('./users/users.module').then(x => x.UsersModule);
const partenairesModule = () =>
  import('./partenaires/partenaires.module').then(x => x.PartenairesModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'p', loadChildren: partenairesModule },
  { path: 's', loadChildren: usersModule, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
