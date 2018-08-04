import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cheapware-app';

  constructor(private http: HttpClient){
  }

  ngOnIt(): void {
    this.http.get('https://localhost:44306/api/').subscribe(data => {
      console.log(data);
    })
  }
}

