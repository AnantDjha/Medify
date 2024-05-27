import { Injectable } from '@angular/core';
import { Cart } from '../../information/Cart';
import { mediInfo } from '../../information/mediInfo';
import { CartItem } from '../../information/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem:Cart = new Cart()
  

  addItemToCart(medi : mediInfo)
  {
    let tempItem = this.cartItem.items.find(item => item.medi.id === medi.id)
    if(tempItem)
    {
      this.changeQuantity(medi.id, tempItem.quantity+1)
      return
    }
    this.cartItem.items.push(new CartItem(medi))
  }

  removeFromCart(foodId:number)
  {
    this.cartItem.items = this.cartItem.items.filter(item => item.medi.id != foodId) 
  }
  changeQuantity(mediId:number , quantity:number)
  {
    let tempItem = this.cartItem.items.find(item => item.medi.id === mediId)
    if(!tempItem) return

    tempItem.quantity = quantity

  }

  getCart():Cart
  {
    return this.cartItem
  }
  constructor() {
   }

}
