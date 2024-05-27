import { mediInfo } from "./mediInfo";

export class CartItem
{
    medi:mediInfo
    quantity:number = 1
    constructor(medi:mediInfo)
    {
        this.medi = medi
    }
    get getPrice()
    {
        return this.medi.price * this.quantity
    }
    
}