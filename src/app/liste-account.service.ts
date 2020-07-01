import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ListeAccountService {
  listeAccounts = [
    {
      name : 'Sameh Account',
      status : 'active'
    },
    {
      name : 'Mohamed Account',
      status : 'inactive'
    },
    {
      name : 'Mariem Account',
      status : 'hidden'
    },
  ]

  constructor(private logger : LoggerService) { }

  getListeAccounts() {
    return this.listeAccounts;
  }

  addAccount(acc) {
    this.listeAccounts.push(acc);
  }

  changeStatus(id, newStatus) {
    this.listeAccounts[id].status = newStatus;
    this.logger.logToConsole(this.listeAccounts[id]);


  }
}
