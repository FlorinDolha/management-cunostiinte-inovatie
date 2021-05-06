import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadershipRoutingModule } from './leadership-routing.module';
import { LeadershipIntroductionComponent } from '../components/leadership-introduction/leadership-introduction.component';
import { LeadershipComponent } from '../components/leadership/leadership.component';
import { AngularMaterialModule } from '../angular-material.module';
import { StiluriComponent } from '../components/stiluri/stiluri.component';
import { GenComponent } from '../components/gen/gen.component';
import { CulturaComponent } from '../components/cultura/cultura.component';


@NgModule({
  declarations: [LeadershipIntroductionComponent,
  LeadershipComponent,
  StiluriComponent,
  GenComponent,
  CulturaComponent],
  imports: [
    CommonModule,
    LeadershipRoutingModule,
    AngularMaterialModule,
  ]
})
export class LeadershipModule { }
