import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../models/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlist: Wishlist;

  constructor(protected wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }

  addBeer(beer){
    this.wishlistService.addBeer(beer);
  }

  deleteBeer(beer){
    this.wishlistService.deleteBeer(beer);
  }
}
