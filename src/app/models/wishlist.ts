import { Beer } from './beer';

export class Wishlist{
  public beers: Beer[] =[];

  addToList(beer: Beer){
    if(!this.findPosition(beer)){
      this.beers.push(beer);
    }
  }
  deleteFromList(beer: Beer){
    var position = this.findPosition(beer)
    if(position){
      this.beers.splice(position, 1);
    }
  }

  isInWishlist(beer){
    if(!this.findPosition(beer)){
      return false;
    }
    return true;
  }

  findPosition(beer:Beer){
    for(let i=0; i < this.beers.length; i++){
      if(beer.id == this.beers[i].id){
        return i;
      }
    }
    return false;
  }
}
