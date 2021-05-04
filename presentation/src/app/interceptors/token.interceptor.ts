import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from '../services/data/data.service';
import { SettingsService } from '../services/settings/settings.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public settingsService: SettingsService,
              private router: Router,
              private dataService: DataService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.settingsService.getCredentials().accessToken}`
      }
    });
    return next.handle(request).pipe(
        catchError(err => {
            if (err.status === 401) { ///Unauthorized
                this.settingsService.setCredentials('', '');
                this.dataService.sendData(false);
                this.router.navigate(['/login']);
            }
            return throwError(err);
        })
    );
  }
}