import { Component, OnInit } from '@angular/core';
import {Inventorys} from '../Inventorys';
import {AppService} from '../app.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  inventories : Inventorys[];
  ufo

  selecteditem : Inventorys

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getInventories();
  }

  onSelect(item: Inventorys): void {
    this.selecteditem = item;
  }

  updateStock(item: Inventorys): Observable<any> {
    return this.http.put('http://cheapwareapi.azurewebsites.net/api/inventorys', item, httpOptions);
  }

  getInventories(): void {
    this.http.get<Inventorys[]>('http://cheapwareapi.azurewebsites.net/api/inventorys').subscribe(data => {
      this.ufo = data as Inventorys[];
  })
  }
}
