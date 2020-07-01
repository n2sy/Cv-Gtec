import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/personne';
import { ListeRecrueService } from '../liste-recrue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() pers : Personne;
  constructor(private recrueService: ListeRecrueService) { }

  ngOnInit() {
  }

  recruterPersonne() {
    this.recrueService.addRecrue(this.pers);
  }

}
