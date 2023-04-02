import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';


@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit{
   
  topDeals!:Observable<any>

  constructor(private http:HttpService,private cart:CartService){}
  
  ngOnInit(): void {
    this.gettopDealData();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  gettopDealData(){
    this.topDeals= this.http.getDataFromServer("top-deals");
    console.log(this.topDeals);
  }

  addToCart(item:any){
    this.cart.addItemToCart(item);
  }

  
}

