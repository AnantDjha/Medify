import { mediInfo } from "./mediInfo";

export class CartItem{
    medi!:mediInfo
    quantity:number =1
    constructor(medi:mediInfo)
    {
        this.medi= medi
    }
    get getPrice():number
    {
        return this.quantity*this.medi.price
    }
}