import { Component, OnInit } from '@angular/core';
import {Inventorys} from '../Inventorys';
import {AppService} from '../app.service'

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  inventories : Inventorys[];

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.getInventories();
  }

  getInventories(): void {
    this.appService.getInventories()
    .subscribe(inventories => this.inventories = inventories)
  }
}
