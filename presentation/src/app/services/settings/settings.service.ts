import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  constructor() { }

  public setCredentials(username: string, jwt: string){
    localStorage.setItem('username', username);
    localStorage.setItem('accessToken', jwt);
  }
  public getCredentials() {
    var username = localStorage.getItem('username');
    var jwt = localStorage.getItem('accessToken');
    
    return { 'username': username, 'accessToken': jwt };
  }
}
