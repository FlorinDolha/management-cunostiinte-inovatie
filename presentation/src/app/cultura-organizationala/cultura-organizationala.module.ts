import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturaOrganizationalaRoutingModule } from './cultura-organizationala-routing.module';
import { CulturaOrganizationalaComponent } from '../components/cultura-organizationala/cultura-organizationala.component';
import { CulturaOrganizationalaCap1Component } from '../components/cultura-organizationala-cap1/cultura-organizationala-cap1.component';
import { ValoriSimboluriComportamenteComponent } from '../components/valori-simboluri-comportamente/valori-simboluri-comportamente.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [CulturaOrganizationalaComponent, CulturaOrganizationalaCap1Component, ValoriSimboluriComportamenteComponent],
  imports: [
    CommonModule,
    CulturaOrganizationalaRoutingModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class CulturaOrganizationalaModule { }
