import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadershipRoutingModule } from './leadership-routing.module';
import { LeadershipIntroductionComponent } from '../components/leadership-introduction/leadership-introduction.component';
import { LeadershipComponent } from '../components/leadership/leadership.component';
import { StiluriComponent } from '../components/stiluri/stiluri.component';
import { GenComponent } from '../components/gen/gen.component';
import { CulturaComponent } from '../components/cultura/cultura.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [LeadershipIntroductionComponent,
  LeadershipComponent,
  StiluriComponent,
  GenComponent,
  CulturaComponent],
  imports: [
    CommonModule,
    LeadershipRoutingModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
  ]
})
export class LeadershipModule { }
