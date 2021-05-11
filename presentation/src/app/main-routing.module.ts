import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { MainComponent } from './components/main/main.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'board', component: LeaderboardComponent },
      { path: 'leadership', loadChildren: () => import('./leadership/leadership.module').then(m => m.LeadershipModule) },
      { path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule) },
      { path: 'cultura-organizationala', 
        loadChildren: () => import('./cultura-organizationala/cultura-organizationala.module').then(m => m.CulturaOrganizationalaModule) 
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
