import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';          // import signalR
import { HttpClient } from '@angular/common/http';
import { MessageDto } from '../../models/MessageDto';
import { Observable, Subject } from 'rxjs';
import { HttpHelperService } from '../httpHelper/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  msgInboxArray: MessageDto[] = [];

  private  connection: any = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/chatsocket")   // mapping to the chathub as in startup.cs
                                         .configureLogging(signalR.LogLevel.Information)
                                         .build();
  readonly POST_URL = "https://localhost:5001/api/chat/send"

  private receivedMessageObject: MessageDto = new MessageDto();
  private sharedObj = new Subject<MessageDto>();

  constructor(private http: HttpClient) { 
   this.connection.on("ReceiveOne", (user, message) => { this.mapReceivedMessage(user, message); });
   this.connection.start()
   .then(() => console.log('Connection started'))
   .catch(err => console.log('Error while starting connection: ' + err))            
  }

  private mapReceivedMessage(user: string, message: string): void {
    this.receivedMessageObject.user = user;
    this.receivedMessageObject.msgText = message;
    this.sharedObj.next(this.receivedMessageObject);
 }

  public broadcastMessage(msgDto: any) {
    this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));
  }

  public retrieveMappedObject(): Observable<MessageDto> {
    return this.sharedObj.asObservable();
  }
}