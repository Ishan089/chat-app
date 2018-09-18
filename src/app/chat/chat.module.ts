import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {RouterModule, Router } from '@angular/router';
//import {ToastrService } from 'ngx-toastr/ngx-toastr';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule } from '../shared/shared.module';
import {UserDetailsComponent } from '../shared/user-details/user-details.component';
import {RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    //ToastrService,
    SharedModule,
    RouterModule.forChild([
      {path:'chat', component:ChatBoxComponent}
    ])
  ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe]
})
export class ChatModule { }
