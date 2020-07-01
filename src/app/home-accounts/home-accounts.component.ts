import { Component, OnInit } from '@angular/core';
import { ListeAccountService } from '../liste-account.service';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css']
})
export class HomeAccountsComponent implements OnInit {
  listeAccounts = [];
  constructor(private AccService : ListeAccountService) { }

  ngOnInit() {
    this.listeAccounts = this.AccService.getListeAccounts();
  }

  addAccount(a) {
    //this.listeAccounts.push(a);
    //this.AccService.addAccount(a);
  }

}
