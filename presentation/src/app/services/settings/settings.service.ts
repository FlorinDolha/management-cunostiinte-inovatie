import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  constructor() { }

  public setCredentials(email: string, token: string){
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
  }
  public getCredentials() {
    var email = localStorage.getItem('email');
    var token = localStorage.getItem('token');
    
    return { 'email': email, 'token': token };
  }
}
