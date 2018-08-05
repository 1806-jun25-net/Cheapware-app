import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Inventorys} from './Inventorys'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private inventorysurl = 'http://cheapwareapi.azurewebsites.net/api/inventorys';  // URL to web api

    /** GET heroes from the server */
getInventories(): Observable<Inventorys[]> {
  return this.http.get<Inventorys[]>(this.inventorysurl)
}


  constructor(
    private http : HttpClient,
  ) {}

    /** PUT: update the hero on the server */
    updateInventories(inventory: Inventorys): Observable<any> {
      return this.http.put(this.inventorysurl, inventory, httpOptions)
}
}
