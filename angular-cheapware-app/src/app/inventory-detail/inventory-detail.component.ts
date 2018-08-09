import { Component, OnInit, Input } from '@angular/core';
import {Inventorys} from '../Inventorys';
import {AppService} from '../app.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {
  @Input() inv : Inventorys;
  ufo

  constructor(
    private invService : AppService,
    private http : HttpClient
  ) { }

  ngOnInit() {
  }

save(): void {
  this.invService.updateInventories(this.inv)
}

getInventories(): void {
  this.http.get<Inventorys[]>('http://cheapwareapi.azurewebsites.net/api/inventorys').subscribe(data => {
    this.ufo = data as Inventorys[];
})
}


}
