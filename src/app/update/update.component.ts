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
        this.persServ.getPersonneByIdAPI(reponse['id']).subscribe(
          (reponse : Personne) => {
            this.EditedPers = reponse;
          },
          (error) => {
            console.log("Error with getPersonneById");
            
          }
        );
       
        
      }
    )
  }

  MiseAJourPersonne() {
    //this.persServ.updatePersonne(this.EditedPers);
    this.persServ.updatePersonneAPI(this.EditedPers).subscribe(
      (reponse) => {
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log("Error with updatePerson");
        
      }
    )
    
  }

}
