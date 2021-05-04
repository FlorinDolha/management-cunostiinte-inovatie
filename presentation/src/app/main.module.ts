import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ChatComponent } from './components/chat/chat.component';
import { SectionsComponent } from './components/sections/sections.component';
import { UserTypeComponent } from './components/modals/user-type/user-type.component';


@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
    SectionsComponent,
    UserTypeComponent,
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