import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/usejkjkjkrs";
  constructor(private httpclient : HttpClient) { }

  ngOnInit() {
    this.httpclient.get(this.link).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log("Erreur with jsonplaceholder");
      },
      () => {
        console.log("That is all !");
        
      }
    )
  }

}
