import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private persService : ListePersonnesService) { }

  ngOnInit() {
    // let i = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.persService.getPersonneById(i);

    this.activatedRoute.params.subscribe(
      (reponse : Params) => {
        this.pers = this.persService.getPersonneById(reponse['id']);

      }
    )
  }

 

  goToInfos() {
    
  }

}
