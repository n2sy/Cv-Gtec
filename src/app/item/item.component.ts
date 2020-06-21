import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pers : Personne;
  constructor() { }

  ngOnInit() {
  }

}
