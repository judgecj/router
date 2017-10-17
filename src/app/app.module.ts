import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {  AppRoutingModule } from './app.routes';
import {  PetService } from './pet.service';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './dog/dog-details/dog-details.component';
import { CatDetailsComponent } from './cat/cat-details/cat-details.component';
import { CatListComponent } from './cat/cat-list/cat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogDetailsComponent,
    CatDetailsComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    JsonpModule
  ],
  providers: [
    PetService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
