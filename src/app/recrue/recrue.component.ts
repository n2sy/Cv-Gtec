import { Component, OnInit } from '@angular/core';
import { ListeRecrueService } from '../liste-recrue.service';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css']
})
export class RecrueComponent implements OnInit {
  allRecrues : Personne[] = [];
  constructor(private recrueService : ListeRecrueService) { }

  ngOnInit() {
    this.allRecrues = this.recrueService.getListeRecrues();
  }

}
