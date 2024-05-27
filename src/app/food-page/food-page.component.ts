import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { mediInfo } from '../information/mediInfo';
import { MedicineService } from '../services/medicine/medicine.service';
import { CartService } from '../services/cartService/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

    medi:any
    // list:[] = []
    constructor(private routeActivate:ActivatedRoute,private mediService:MedicineService,
      public cartPageItem:CartService, private router :Router)
    {
      routeActivate.params.subscribe(para =>{
        if(para['id'])
        {
          this.medi = mediService.getMedicineById(para['id'])
        }
      })
    }
    addAndNavigate()
    {
      this.cartPageItem.addItemToCart(this.medi)
      // localStorage.setItem("list",JSON.stringify(this.cartPageItem.cartItem.items))
      this.router.navigateByUrl("/cartpage")


    }
}
