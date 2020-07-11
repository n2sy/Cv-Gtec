import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListServersAndUsersService } from '../list-servers-and-users.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allow : boolean = false;
  ser : { id : number, name: String, status : String};

  constructor(private activ : ActivatedRoute, 
    private router : Router,
    private serv : ListServersAndUsersService) { }

  ngOnInit() {
    this.activ.params.subscribe(
      (reponse : Params) => {
        this.ser = this.serv.getServerById(reponse['id'])
      }
    );

    this.activ.queryParams.subscribe(
      (querypar) => {
        this.allow = querypar['allowEdit'] == 1 ? false : true;
      }
    )
  }

  goToEdit() {
    this.router.navigate(['serveurs', this.ser.id, 'edit'])
  }

}
