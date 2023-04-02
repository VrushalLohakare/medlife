import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MedicineHomeComponent } from './component/medicine-home/medicine-home.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { TopDealsByCategoryComponent } from './component/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './component/view-product-details/view-product-details.component';
import { PagenotfoundComponent } from './core/component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine-home",component:MedicineHomeComponent},
  {path:"pagenotfound",component:PagenotfoundComponent},
  {path:"top-deals-by-category",component:TopDealsByCategoryComponent},
  {path:"view-product-details/:drugCode",component:ViewProductDetailsComponent},
 
  {path:"",redirectTo:'/home',pathMatch:'full'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"**",redirectTo:"pagenotfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
