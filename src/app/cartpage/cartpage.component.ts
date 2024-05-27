import { Component } from '@angular/core';
import { CartService } from '../services/cartService/cart.service';
import { Cart } from '../information/Cart';
import { MedicineService } from '../services/medicine/medicine.service';
import { CartItem } from '../information/CartItem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent {
  cart:any

  constructor(public cartser:CartService, private service:MedicineService){
    
  }
  setCart()
  {
    this.cart = this.cartser.getCart();
  }
  remmoveFromCart(cartItem:CartItem)
  {
    this.cartser.removeFromCart(cartItem.medi.id)
    this.setCart()
    // localStorage.setItem("list",JSON.stringify(this.cartser.cartItem.items))

  }
  changeQuantity(cartItem:CartItem,q:string)
  {
    let a = parseInt(q)
    this.cartser.changeQuantity(cartItem.medi.id,a)
    // localStorage.setItem("list",JSON.stringify(this.cartser.cartItem.items))

  }
}
