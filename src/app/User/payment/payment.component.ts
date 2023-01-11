import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
    PaymentForm=this.fb.group({
    UserName:localStorage.getItem('username'),
    ApartmentNumber:localStorage.getItem('aptNumber'),
   // ApartmentName:localStorage.getItem('aptName'),
    Paymentamt:[''],
    Event:'Contribution',
    date:['']
    })
    OnSubmit(){
    console.log(this.PaymentForm.value)
    this.backendservice.insertPaymentdata(this.PaymentForm.value)
  }
  ngOnInit():void{
    
  }
}
