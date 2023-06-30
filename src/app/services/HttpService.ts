import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBeer, IBeerRaw } from "../interfaces/beerInterface";
import { map } from 'rxjs/operators';


const URLBEERS = "http://localhost:8808/beers";

@Injectable({
  providedIn: 'root'
})

class HttpService {

  constructor(private readonly _http: HttpClient) { }

  // get all beers from API
  public getBeersAPI(): Observable<IBeer[]> {
    try {
      const list: Observable<IBeer[]> = this._http.get(URLBEERS).pipe(
        map((beerObj: Object) => beerObj as IBeerRaw),
        map((beerList: IBeerRaw) => beerList.data as IBeer[]))
      return list
    } catch (error) {
      console.error(error);
      throw (error)
    }
  }
}
export default HttpService