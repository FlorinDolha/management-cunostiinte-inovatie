import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

  constructor(private httpClient: HttpClient) { }

  public get<T>(relativeUrl: string, httpParams?: HttpParams) : Observable<T>;
  public get<T>(relativeUrl: string, pathParam: any, httpParams?: HttpParams) : Observable<T>;

  public get<T>(relativeUrl: string, pathParam?: any, httpParams?: HttpParams) : Observable<T> {
    var url: string;

    if (pathParam) {
      url = `${this.apiUrl}/${relativeUrl}/${pathParam}`;
    }
    else {
      url = `${this.apiUrl}/${relativeUrl}`;
    }

    return this.httpClient.get<T>(url, { headers: this.httpOptions.headers, params: httpParams });
  }

  public post<T>(relativeUrl: string, body: any) : Observable<T>{
    return this.httpClient.post<T>(`${this.apiUrl}/${relativeUrl}`, body, this.httpOptions);
  }

  public put<T>(relativeUrl: string, body: any, pathParam: any) : Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${relativeUrl}/${pathParam}`, body, this.httpOptions);
  }
}
