import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers: Beer[];
  public params= {page: 2, per_page: 15};
  public pages: number[] = [];
  constructor(protected beerService: BeerService) { }

  ngOnInit() {
    this.filter();
  }

  public filter(page?, event?){
    this.params.page= page || this.params.page;
    this.beerService.getBeers(this.params).subscribe(
      beers => {
        console.log(beers);
        this.beers = beers;
        this.assemblePager();
        }
    );
  }

  public assemblePager(){
    this.pages=[];
    var max = this.params.page + 2;
    var min = this.params.page - 2;
    for(var i = min; i <= max; i++){
      if(i >= 1){
        this.pages.push(i);
      }
    }
  }

}
