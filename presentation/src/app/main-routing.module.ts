import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { MainComponent } from './components/main/main.component';
import { SectionsComponent } from './components/sections/sections.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'section/:id', component: SectionsComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
