import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
// Import RxJs required methods
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Beer } from '../models/beer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BeerService {
  private beersUrl = "https://api.punkapi.com/v2/beers";

  constructor(private http: Http) { }

  getBeers(params?): Observable<any>{
    console.log(params);
    var url = this.beersUrl;
    if(params){
      url = `${this.beersUrl}/?page=${params.page}&per_page=${params.per_page}`;
    }

    return this.http.get(url,this.getOptionsRequest(params))
      .map((res: Response) => {
        let json = res.json();
        console.log(res.json());
        json.data = json.map(beer => new Beer(beer));
        return json;
      })
      .catch((error:any) => this.handleError(error));
  }

  getBeer = (id): Observable<Beer> => {
    const url = `${this.beersUrl}/${id}`;
    return this.http.get(url,this.getOptionsRequest())
      .map((res: Response) =>new Beer(res.json()[0]))
      .catch((error:any) => this.handleError(error));
  }

  private handleError(error){
    console.log(error);
    return Observable.throw(error._body != '' ? error.json() : 'Error');
  }

  public getOptionsRequest(params?, body?){
        console.log(params);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let opts= { headers: headers };
        if(params){
            let searchParams: URLSearchParams = new URLSearchParams();
            for (var prop in params) {
              console.log(prop);
                searchParams.set(prop, params[prop]);
            }
            opts['search']= searchParams;
        }
        if(body){
            opts['body']= body;
        }
        let options = new RequestOptions(opts);
        console.log(options);
        return options;
    }
}
