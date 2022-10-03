import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  getInfo(): string {
    return 'Hello from core service';
  }

}
