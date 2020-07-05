import { Component, OnInit } from '@angular/core';
import { ListServersAndUsersService } from '../list-servers-and-users.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  ListeServers = [];
  constructor(private serv : ListServersAndUsersService) { }

  ngOnInit() {
    this.ListeServers = this.serv.getListServers();
  }

}
