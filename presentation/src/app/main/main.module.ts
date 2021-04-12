import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../components/main/main.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
})
export class MainModule { }
