import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '../../node_modules/@angular/common';
import {Inventorys} from './Inventorys'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-cheapware-app';
  results = '';
  ufo;
  EntryName;
  EntryQuantity;
  EntryCategory;
  EntryPrice;


  constructor(private http: HttpClient) {
    var FirstEntry;
  }

  ngOnInit(): void {
    this.http.get<Inventorys[]>('http://cheapwareapi.azurewebsites.net/api/inventorys').subscribe(data => {
        this.EntryName = data[0]["name"],
        this.EntryQuantity = data[0]["quantity"],
        this.EntryCategory = data[0]["category"],
        this.EntryPrice = data[0]["price"]
  });
  this.http.get<Inventorys[]>('http://cheapwareapi.azurewebsites.net/api/inventorys').subscribe(data => {
    console.log(data)
})
  }
  
}


