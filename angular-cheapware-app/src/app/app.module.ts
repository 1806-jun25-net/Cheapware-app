import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here!

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoriesComponent,
    InventoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
