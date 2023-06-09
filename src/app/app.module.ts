import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './component/home/home.component';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './component/top-deals/top-deals.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { TopDealsByCategoryComponent } from './component/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './component/view-product-details/view-product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    TopDealsByCategoryComponent,
    ViewProductDetailsComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
