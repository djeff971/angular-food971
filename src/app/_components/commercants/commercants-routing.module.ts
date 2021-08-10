import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from './layout.component';
import { DetailComponent } from './detail.component';



const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: "detail", component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercantsRoutingModule {}
