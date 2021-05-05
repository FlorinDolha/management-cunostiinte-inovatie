import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ChatComponent } from './components/chat/chat.component';
import { UserTypeComponent } from './components/modals/user-type/user-type.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { QuizModalComponent } from './components/modals/quiz-modal/quiz-modal.component';


@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
    UserTypeComponent,
    QuizModalComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [
  ]
})
export class MainModule { 
}