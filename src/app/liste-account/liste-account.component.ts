import { Component, OnInit, Input } from '@angular/core';
import { ListeAccountService } from '../liste-account.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-liste-account',
  templateUrl: './liste-account.component.html',
  styleUrls: ['./liste-account.component.css']
})
export class ListeAccountComponent implements OnInit {
  @Input() account : { name : string, status : string};
  @Input() id;
  constructor(private accService : ListeAccountService) { }

  ngOnInit() {
  }

  setTo(newStatus) {
    this.accService.changeStatus(this.id, newStatus);
    //this.account.status = newStatus;

    
  }

}
