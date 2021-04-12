import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { SettingsService } from 'src/app/services/settings/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService,
    private router: Router,
    private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loginService.login(this.email, this.password)
                        .subscribe(response => {
                          this.settingsService.setCredentials(response.email, response.token);
                          this.router.navigate(['/main']);
                        });
  }
}
