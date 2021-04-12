import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
        tap(resp => {
            if (resp instanceof HttpResponse){
                this.loadingService.setLoading(false);
            }
        }),
        catchError(err => {
            this.loadingService.setLoading(false);
            return throwError(err);
        })
    );
  }
}