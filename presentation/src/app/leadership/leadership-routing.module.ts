import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CulturaComponent } from '../components/cultura/cultura.component';
import { GenComponent } from '../components/gen/gen.component';
import { LeadershipIntroductionComponent } from '../components/leadership-introduction/leadership-introduction.component';
import { LeadershipComponent } from '../components/leadership/leadership.component';
import { StiluriComponent } from '../components/stiluri/stiluri.component';

const routes: Routes = [
  { path: '', component: LeadershipComponent,
    children: [
      { path: 'leadership-introduction', component: LeadershipIntroductionComponent },
      { path: 'gen', component: GenComponent },
      { path: 'stiluri', component: StiluriComponent },
      { path: 'cultura', component: CulturaComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipRoutingModule { }
