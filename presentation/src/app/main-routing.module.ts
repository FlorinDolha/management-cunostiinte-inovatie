import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'leadership', loadChildren: () => import('./leadership/leadership.module').then(m => m.LeadershipModule) },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
