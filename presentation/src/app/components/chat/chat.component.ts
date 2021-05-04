import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageDto } from 'src/app/models/MessageDto';
import { ChatService } from 'src/app/services/chat/chat.service';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public chatService: ChatService,
    private settingsService: SettingsService) {
      
    }

  ngOnInit(): void {
    if (this.chatService.event){
      this.chatService.event.unsubscribe();
    }
    this.chatService.event = this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
  }

  send(): void {
    if(this.chatService.msgDto) {
      this.chatService.msgDto.user = this.settingsService.getCredentials().username;
      this.chatService.broadcastMessage(this.chatService.msgDto);
      this.chatService.msgDto.msgText = "";
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.chatService.msgInboxArray.push(newObj);
  }
}