import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaOrganizationalaCap1Component } from '../components/cultura-organizationala-cap1/cultura-organizationala-cap1.component';
import { CulturaOrganizationalaComponent } from '../components/cultura-organizationala/cultura-organizationala.component';
import { ValoriSimboluriComportamenteComponent } from '../components/valori-simboluri-comportamente/valori-simboluri-comportamente.component';

const routes: Routes = [
  { path: '', component: CulturaOrganizationalaComponent,
  children: [
    { path: 'cultura-organizationala', component: CulturaOrganizationalaCap1Component },
    { path: 'valori-simboluri-comportamente', component: ValoriSimboluriComportamenteComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturaOrganizationalaRoutingModule { }
