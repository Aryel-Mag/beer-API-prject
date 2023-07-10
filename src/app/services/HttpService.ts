import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBeer, IBeerRaw } from "../interfaces/beerInterface";
import { map, tap } from 'rxjs/operators';


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
        map((beerList: IBeerRaw) => beerList.data as IBeer[])
      )
      return list
    } catch (error) {
      console.error(error);
      throw (error)
    }
  }

  public postBeer(beer: IBeer): Observable<IBeer> {
    try {

      // CREATES JSON FILE WITH BEER INTERFACE
      let json = {
        name: beer.name,
        tagline: beer.tagline,
        first_brewed: beer.firstBrewed,
        description: beer.description,
        image_url: beer.image_url,
        food_pairing: [beer.foodPairingOne, beer.foodPairingTwo, beer.foodPairingThree],
        brewers_tips: beer.brewerTips,
        contributed_by: beer.contributor
      };

      const beer$: Observable<IBeer> = this._http.post(URLBEERS, json).pipe(
        map((beerObj: Object) => beerObj as IBeer)
      );
      return beer$;
    } catch (error) {
      console.error(error);
      throw (error);
    }
  }

  deleteBeer(id: number): void {
    this._http.delete(URLBEERS + "/" + id).subscribe();
  }

}
export default HttpService