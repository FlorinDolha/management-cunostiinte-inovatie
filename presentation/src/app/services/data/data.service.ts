import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public subject = new Subject<any>();

  sendData(data: any) {
      this.subject.next(data);
  }
}
