import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist';

@Injectable()
export class WishlistService {
  wishlist: Wishlist;

  constructor() {
    this.wishlist = new Wishlist();
  }

  getWishlist(){
    return this.wishlist;
  }
  addBeer(beer){
    this.wishlist.addToList(beer);
  }

  deleteBeer(beer){
    this.wishlist.deleteFromList(beer);
  }

  isInWishlist(beer):boolean{
    return this.wishlist.isInWishlist(beer);
  }
}
