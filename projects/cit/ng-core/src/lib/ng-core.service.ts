import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgCoreService {

  constructor() { }

  getInfo(): string {
    return 'Hello from ng core service';
  }

}
