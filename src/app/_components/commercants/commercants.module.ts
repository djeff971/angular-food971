import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommercantsRoutingModule } from './commercants-routing.module'

import { LayoutComponent } from './layout.component';
import { DetailComponent } from './detail.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CommercantsRoutingModule
    ],
    declarations: [
        LayoutComponent,
        DetailComponent,
    ]
})
export class CommercantsModule { }