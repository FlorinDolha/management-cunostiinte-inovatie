import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpRequest } from 'src/app/models/SignUpRequest';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: SignUpRequest = {
    username: undefined,
    password: undefined,
  };

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.loginService.register(this.user).subscribe(_ => this.router.navigate(["/login"]));
  }
}