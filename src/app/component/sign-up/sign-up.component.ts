import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm!: FormGroup
  isGetOtp: boolean = false;
  OtpCounter: number = 0;
  otpGenerated!:number;
  sub!: Subscription;
  isOtpVerified:boolean = false;

  constructor(private fb: FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signUpForm = this.fb.group({
      "userName": ['',[Validators.required]],
      "password": ['',[Validators.required]],
      "mobileNumber": ['',[Validators.required,Validators.maxLength(10)]],
      "isMobNoVerified": [false]
    })
  }

 

  getOtp() {
    this.isGetOtp = true;

    this.otpGenerated = Math.floor(1000+Math.random()*9000);
    console.log(this.otpGenerated);

    this.sub = interval(1000).subscribe((el: any) => {
      this.OtpCounter = 60 - el;
      if (this.OtpCounter === 0) {
        this.sub.unsubscribe();
      }
      console.log(el);
    })
  }

  isIncorrectOtp:boolean = false ;
  verifyOtp(otp:any) {
    if(this.otpGenerated == otp){
      this.isOtpVerified = true; 
      this.isGetOtp = false ;
      this.isIncorrectOtp=false;
      this.sub.unsubscribe();
      this.signUpForm.controls["isMobNoVerified"].setValue(true);
    }else{
      this.isIncorrectOtp=true;
    }
   
  }

  signUp() {
    console.log(this.signUpForm.value);
    this.http.postDataServer("users",this.signUpForm.value).subscribe((el:any)=>{})
  }

  ngOnDestroy() {
   
    this.sub.unsubscribe();
  }
}
