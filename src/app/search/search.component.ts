import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import { ListePersonnesService } from '../liste-personnes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listPersons : Personne[];
  constructor(private pServ : ListePersonnesService, 
    private router : Router) { }

  ngOnInit() {
  }

  searchPerson(subname) {
    this.pServ.getPersonBySubName(subname).subscribe(
      (reponse) => {
        this.listPersons = reponse;
      },
      (error) => {
        console.log("Error with getBySubName");     
      }
    )
  }

  goToInfos(p) {
    this.listPersons= [];
    this.router.navigate(['cv', p['id']]);

  }

}
