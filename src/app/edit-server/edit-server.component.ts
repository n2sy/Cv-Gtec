import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServersAndUsersService } from '../list-servers-and-users.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  EditedServer;
  constructor(private activated : ActivatedRoute,
    private router : Router,
    private s : ListServersAndUsersService) { }

  ngOnInit() {
    this.activated.params.subscribe(
      (reponse) => {
        this.EditedServer = this.s.getServerById(reponse['id'])
      }
    )
  }

  commitChanges() {
    this.s.updateServer(this.EditedServer);
    this.router.navigate(['serveurs', this.EditedServer.id])
  }

}
