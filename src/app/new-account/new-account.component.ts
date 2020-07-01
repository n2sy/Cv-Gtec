import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListeAccountService } from '../liste-account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  //@Output() sendAcc = new EventEmitter
  constructor(private accService : ListeAccountService) { }

  ngOnInit() {
  }

  addAccount(n, s) {
    //this.sendAcc.emit({name : n, status : s});
    this.accService.addAccount({name : n, status : s});

  }

}
