import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  actionName: string = "signIn";
  isUserLoggedIn: boolean = false;
  userDetails:any;
  
  cartCounter:number = 0 ;
  @ViewChild('closeBtn') closeBtn!: ElementRef;

  constructor(private auth:AuthService,private shared:SharedService) { }

  ngOnInit(): void {
    let userData = this.auth.getUserDetailsFromLocalStorage();
    if(userData){
   this.isUserLoggedIn = true ;
   this.userDetails = userData;

   this.shared.cartCounterObs.subscribe((el:any)=>{
    this.cartCounter = el ;
 })

 
    }
  }

  changeAction(action: string) {
    this.actionName = action;
  }

  getAction(flag: any) {
    if (flag) {
      this.closeBtn.nativeElement.click();
      this.isUserLoggedIn = true;
      this.userDetails = this.auth.getUserDetailsFromLocalStorage();
    }

  }
}
