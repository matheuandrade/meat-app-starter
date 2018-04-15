import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item.model'

export class ShoppinCartService{
  items: CartItem[] = []

  clear(){
      this.items = []
  }

  total(): number{
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev+value, 0)
  }

  additem(item: MenuItem){
    let foundedItem = this.items.find((mItem) => mItem.menuItem.id == item.id)

    if(foundedItem){
      foundedItem.quantity = foundedItem.quantity +1;
    }else
    {
      this.items.push(new CartItem(item));
    }

  }

  removeItem(item: CartItem){
      this.items.splice(this.items.indexOf(item), 1)
  }


}
