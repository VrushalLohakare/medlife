import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
