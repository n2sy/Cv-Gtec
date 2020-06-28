import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste-account',
  templateUrl: './liste-account.component.html',
  styleUrls: ['./liste-account.component.css']
})
export class ListeAccountComponent implements OnInit {
  @Input() account : { name : string, status : string};
  constructor() { }

  ngOnInit() {
  }

  setTo(newStatus) {
    this.account.status = newStatus;
    console.log(this.account.name + " status changed to " + newStatus);
    
  }

}
