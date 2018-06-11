import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes : Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: 'beers', component: BeerListComponent, pathMatch: 'full'  },
  { path: 'beers/:id', component: BeerDetailComponent, pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
