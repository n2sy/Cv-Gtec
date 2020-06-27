import { Component, OnInit } from '@angular/core';
import { Server } from '../Model/server';

@Component({
  selector: 'app-manage-server',
  templateUrl: './manage-server.component.html',
  styleUrls: ['./manage-server.component.css']
})
export class ManageServerComponent implements OnInit {
  filterStatus : String ='';
  listeServers : Server[] = [
    new Server('Production Server', 'medium', 'critical', new Date(2019, 6, 20)),
    new Server('Testing Development Server', 'small', 'stable', new Date(2018, 3, 20)),
    new Server('Development Server', 'large', 'offline', new Date(2017, 1, 22)),
    new Server('Nidhal Server', 'mediul', 'stable', new Date(2019, 3, 11))
  ]
  constructor() { }

  ngOnInit() {
  }

  getClass(s) {
    // if(s.status == "critical") 
    //   return ({'list-group-item-danger' : true});
    // else if(s.status == "offline")
    //   return ({'list-group-item-warning' : true});
    // else
    //   return ({'list-group-item-success' : true});

    return {
      'list-group-item-danger' : s.status == 'critical',
      'list-group-item-warning' : s.status == 'offline' ,
      'list-group-item-success' : s.status == 'stable'
    }
  }

  addServer() {
    this.listeServers.push(
      new Server('New Server', 'small', 'stable', new Date(2018, 3, 20)),
    )
  }

}
