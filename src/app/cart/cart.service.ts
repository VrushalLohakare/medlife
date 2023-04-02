import { Injectable } from '@angular/core';
import { SharedService } from '../core/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private orderObj: any;

  constructor(private shared:SharedService) { }

  addItemToCart(item:any){
    let cartItems:any = this.getProductsDataFromLocalStorage();
    cartItems.push(item);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    this.shared.emitItem(cartItems.length);
  }
  
  getProductsDataFromLocalStorage(){
    let items = localStorage.getItem("cartItems");
    if(items){
     items = JSON.parse(items);
     return items ; 
    }else{
      return [];
    }
  }

  setOrderDetails(order:any){
    this.orderObj = order ;
  }

  getOrderDetails(){
    return this.orderObj;
  }

  clearProductFromLocalStorage(){
    localStorage.removeItem('cartItems');
  }
}
