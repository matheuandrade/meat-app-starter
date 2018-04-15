import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {RestaurantService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
