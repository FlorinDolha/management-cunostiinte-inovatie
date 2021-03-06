import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { HttpHelperService } from 'src/app/services/httpHelper/http-helper.service';
import { LoginService } from 'src/app/services/login/login.service';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { UserTypeComponent } from '../modals/user-type/user-type.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginRequest = {
    username: undefined,
    password: undefined,
    role: "user",
  }

  constructor(private loginService: LoginService,
    private router: Router,
    private settingsService: SettingsService,
    private dialog: MatDialog,
    private httpHelperService: HttpHelperService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loginService.login(this.user)
                        .subscribe(response => {
                          this.settingsService.setCredentials(response.username, response.accessToken);
                          this.router.navigate(['/main']);
                        });
  }
}
