import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBeer } from "../interfaces/beerInterface";
import { map } from 'rxjs/operators';


const URLBEERS = " https://api.punkapi.com/v2/beers";

@Injectable({
  providedIn: 'root'
})

class HttpService {

  constructor(private readonly _http: HttpClient) { }

  // get all beers from API
  public getBeersAPI(): Observable<IBeer[]> {
    try {
      const list: Observable<IBeer[]> = this._http.get(URLBEERS).pipe(
        map((beerList: Object) => beerList as IBeer[]))
      return list
    } catch (error) {
      console.error(error);
      throw (error)
    }
  }
}
export default HttpService