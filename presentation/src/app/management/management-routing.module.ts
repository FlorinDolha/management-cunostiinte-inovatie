import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroducereKMComponent } from '../components/introducere-km/introducere-km.component';
import { ManagementCunostinteInovatieComponent } from '../components/management-cunostinte-inovatie/management-cunostinte-inovatie.component';
import { ManagementCunostinteSistemeInformaticeComponent } from '../components/management-cunostinte-sisteme-informatice/management-cunostinte-sisteme-informatice.component';
import { ManagementComponent } from '../components/management/management.component';
import { SustenabilitateManagementCunostinteComponent } from '../components/sustenabilitate-management-cunostinte/sustenabilitate-management-cunostinte.component';

const routes: Routes = [
  { path: '', component: ManagementComponent,
  children: [
    { path: 'introducere-km', component: IntroducereKMComponent },
    { path: 'management-cunostinte-inovatie', component: ManagementCunostinteInovatieComponent },
    { path: 'management-cunostinte-sisteme-informatice', component: ManagementCunostinteSistemeInformaticeComponent },
    { path: 'sustenabilitate-management-cunostinte', component: SustenabilitateManagementCunostinteComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
