import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-cheapware-app';
  results ='';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://cheapwareapi.azurewebsites.net/api/inventorys').subscribe(data => {
      console.log(data);
    });
  }
}
