import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { WishlistService } from '../services/wishlist.service';
import { Beer } from '../models/beer';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
  beer: Beer;
  inWishlist: boolean = false;

  constructor(private beerService: BeerService, private route: ActivatedRoute, private wishlistService: WishlistService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params.id);
        this.beerService.getBeer(params.id).subscribe(
          (beer: Beer) => {
            this.beer = beer;
            this.inWishlist = this.wishlistService.isInWishlist(beer);
          });
      }
    );
  }

  public addToWishlist(){
    this.wishlistService.addBeer(this.beer);
    this.updateIsInWishlist();
  }
  public deleteFromWishlist(){
    this.wishlistService.deleteBeer(this.beer);
    this.updateIsInWishlist();
  }
  public updateIsInWishlist(){
    this.inWishlist = this.wishlistService.isInWishlist(this.beer);
    console.log(this.inWishlist);
  }

}
