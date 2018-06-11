import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Componentes
import { AppComponent } from './app.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { HeaderComponent } from './header/header.component';
import { WishlistComponent } from './wishlist/wishlist.component';


//Servicios
import { BeerService } from './services/beer.service';
import { WishlistService } from './services/wishlist.service';


@NgModule({
  declarations: [
    AppComponent,
    BeerDetailComponent,
    BeerListComponent,
    HeaderComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  exports:[],
  providers: [
    BeerService,
    WishlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
