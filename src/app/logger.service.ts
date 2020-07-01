import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logToConsole(acc) {
    console.log(acc.name + " status changed to " + acc.status);

  }
}
