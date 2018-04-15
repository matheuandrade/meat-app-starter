import {Restaurant} from "./restaurant/restaurant.model"
import {MEAT_API} from '../app.api'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import {MenuItem} from '../restaurant-detail/menu-item.model'


@Injectable()
export class RestaurantService{

constructor(private http: Http){
}

restaurants(): Observable<Restaurant[]>{
  return this.http.get(`${MEAT_API}/restaurants`)
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
  //return this.rests;
}

reviewsOfRestaurant(id: string): Observable<any>{
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
}

restaurantById(id: string): Observable<Restaurant>{
  return this.http.get(`${MEAT_API}/restaurants/${id}`)
  .map(response => response.json())
  .catch(ErrorHandler.handleError)
}

menuOfRestaurant(id: string): Observable<MenuItem[]>{

  return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
  .map(response => response.json())
  .catch(ErrorHandler.handleError)

}


/*
rests: Restaurant[] = [
  {
    id: "bread-bakery",
    name: "Bread & Bakery",
    category: "Bakery",
    deliveryEstimate: "25m",
    rating: 4.9,
    imagePath: "assets/img/restaurants/breadbakery.png",
    //about: "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
    //hours: "Funciona de segunda à sexta, de 8h às 23h"
  },
  {
    id: "burger-house",
    name: "Burger House",
    category: "Hamburgers",
    deliveryEstimate: "100m",
    rating: 3.5,
    imagePath: "assets/img/restaurants/burgerhouse.png",
    //about: "40 anos se especializando em trash food.",
    //hours: "Funciona todos os dias, de 10h às 22h"
  }]*/

}
