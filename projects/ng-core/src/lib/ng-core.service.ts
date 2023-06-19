import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgCoreService {

  constructor() { }

  getInfo(): Observable<string> {
    return of('Hello from ng core service');
  }

}
