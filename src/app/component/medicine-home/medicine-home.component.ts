import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {

  pincode: string = "";
  pincodeDetails: any;
  displayErrorMessage: boolean = false;
  updatePinCode:boolean= true;
  @ViewChild('closeBtn') closeBtn!:ElementRef;
  constructor(private http: HttpService) { }

  ngOnInit(): void {

  }

  verifyPinCode() {
    const endPoint = "pin-code-details?" + "pincode=" + this.pincode;
    this.http.getDataFromServer(endPoint).subscribe((el: any) => {
      if (el && el.length > 0) {
        this.pincodeDetails = el[0];
        this.displayErrorMessage = false;
        this.updatePinCode = false ;
        this.closeBtn.nativeElement.click();
      } else {
        this.displayErrorMessage = true;
        this.updatePinCode = true;
      }
    })
  }

}
