import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListePersonnesService } from '../liste-personnes.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persService : ListePersonnesService) { }

  ngOnInit() {
    // let i = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.persService.getPersonneById(i);

    this.activatedRoute.params.subscribe(
      (reponse : Params) => {
        this.persService.getPersonneByIdAPI(reponse['id']).subscribe(
          (reponse : Personne) => {
            this.pers = reponse;
          },
          (error) => {
            console.log("Error with getPersonneById");
          }
        )
      },
      (error) => {
        console.log("Error with Route Params");
      }
    )
  }

  supprimerPersonne() {
    if(confirm('Voulez-vous vraiment supprimer '+ this.pers['prenom'] + ' ?')) {
      //this.persService.deletePersonne(this.pers);
      this.persService.deletePersonneAPI(this.pers['id']).subscribe(
        (reponse) => {
          this.router.navigate(['cv']);
        },
        (error) => {
          console.log("Error with DeletePerson");
          
        }
      )
      
    }
  }

goToUpdate() {
  this.router.navigate(['cv/edit', this.pers['id']]);
}
  

}
