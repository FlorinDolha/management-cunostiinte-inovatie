import { Injectable } from '@angular/core';
import { HttpHelperService } from '../httpHelper/http-helper.service';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from '../data/data.service';
import { SignUpRequest } from 'src/app/models/SignUpRequest';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointRelativeUrl: string = "auth";

  constructor(private httpHelperService: HttpHelperService,
    private dataService: DataService,
    private settingsService: SettingsService) { }

  register(user: SignUpRequest) {
    return this.httpHelperService.post<any>(this.endpointRelativeUrl + "/signup", user);
  }

  login(user: LoginRequest){
    return this.httpHelperService.post<any>(this.endpointRelativeUrl + "/signin", user)
                    .pipe(
                      tap(response => {
                        this.dataService.sendData(true);
                    }),
                      catchError(errorResponse => {
                        this.dataService.sendData(false);
                        return throwError(errorResponse);
                    }));
  }
}