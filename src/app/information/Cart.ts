import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[] = []
    
    

    get getTotalPrice()
    {
        let totalPrice = 0;
        for(let i = 0;i< this.items.length ;i++)
        {
            totalPrice = totalPrice + this.items[i].getPrice
        }
        return totalPrice
        
    }


}