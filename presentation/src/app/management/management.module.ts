import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { IntroducereKMComponent } from '../components/introducere-km/introducere-km.component';
import { ManagementCunostinteInovatieComponent } from '../components/management-cunostinte-inovatie/management-cunostinte-inovatie.component';
import { ManagementCunostinteSistemeInformaticeComponent } from '../components/management-cunostinte-sisteme-informatice/management-cunostinte-sisteme-informatice.component';
import { SustenabilitateManagementCunostinteComponent } from '../components/sustenabilitate-management-cunostinte/sustenabilitate-management-cunostinte.component';
import { ManagementComponent } from '../components/management/management.component';


@NgModule({
  declarations: [
    IntroducereKMComponent, 
    ManagementCunostinteInovatieComponent, 
    ManagementCunostinteSistemeInformaticeComponent, 
    SustenabilitateManagementCunostinteComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    AngularMaterialModule
  ]
})
export class ManagementModule { }
