import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../components/main/main.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { ChatComponent } from '../components/chat/chat.component';


@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
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
export class MainModule { }
