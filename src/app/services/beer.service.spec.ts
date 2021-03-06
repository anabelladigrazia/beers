import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerService]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch beers', inject([BeerService], (service: BeerService) => {
    service.getBeers().subscribe((beers) => {
      expect(beers).toBeTruthy();
    });
  }));
});
