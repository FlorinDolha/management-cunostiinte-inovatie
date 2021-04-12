import { Injectable } from '@angular/core';
import { HttpHelperService } from '../httpHelper/http-helper.service';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from '../data/data.service';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(private httpHelperService: HttpHelperService,
    private dataService: DataService) { }

  register(user: User) {
    return this.httpHelperService.post<any>(this.url + "/register", user);
  }

  login(email: string, password: string){
    return this.httpHelperService.post<any>(this.url + "/login", {'email': email, 'password': password})
                    .pipe(
                      tap(response => {
                        localStorage.setItem("email", response.email);
                        localStorage.setItem("token", response.token);
                        this.dataService.sendData(true);
                    }),
                      catchError(errorResponse => {
                        this.dataService.sendData(false);
                        return throwError(errorResponse);
                    }));
  }
}
