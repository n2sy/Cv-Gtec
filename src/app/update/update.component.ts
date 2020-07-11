import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  EditedPers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persServ : ListePersonnesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (reponse) => {
        this.EditedPers = this.persServ.getPersonneById(reponse['id']);
        console.log(this.EditedPers);
        
      }
    )
  }

  MiseAJourPersonne() {
    this.persServ.updatePersonne(this.EditedPers);
    this.router.navigate(['cv']);
  }

}
