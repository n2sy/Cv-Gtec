import { Component, OnInit } from '@angular/core';
import { ListePersonnesService } from '../liste-personnes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private pServ : ListePersonnesService,
    private router : Router) { }

  ngOnInit() {
  }

  ajouterPersonne(newP) {
    this.pServ.addPersonne(newP);
    console.log(this.pServ.getListePersonnes());
    
    this.router.navigate(['cv'])
    
  }

}
