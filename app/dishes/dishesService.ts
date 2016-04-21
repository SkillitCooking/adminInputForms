import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

import {Dish} from './dishForm';

@Injectable()
export class DishesService {
  constructor(private http: Http){}

  private _dishesUrl = 'app/dishes/mockDishes.json';
  
  getDishes(): Observable<Dish[]> {
    return this.http.get(this._dishesUrl)
                    .map(this.extractDishesData)
                    .catch(this.handleError);
  }

  addDish(dish: Dish): Observable<Dish> {
    let body = JSON.stringify(dish);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._dishesUrl, body, options)
      .map(this.extractDishData)
      .catch(this.handleError);
  }

  private extractDishData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad Response Status: ' + res.status);
    }
    let body = res.json();
    return body.data.dish || { };
  }

  private extractDishesData(res: Response) {
    if (res.status < 200 || res.status >= 300){
      throw new Error('Bad Response Status: ' + res.status);
    }
    let body = res.json();
    return body.data.dishes || [];
  }

  //in future will want to have remote logging infrastructure
  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}