import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { InventoriesComponent } from './inventories/inventories.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoriesComponent
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
