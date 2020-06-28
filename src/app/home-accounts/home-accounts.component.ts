import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css']
})
export class HomeAccountsComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

  addAccount(a) {
    this.listeAccounts.push(a);
  }

}
