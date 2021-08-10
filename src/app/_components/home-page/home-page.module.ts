import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './HomePage-routing.module';

import { HomePageComponent } from './home-page.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePageComponent,
    ]
})
export class HomePageModule { }