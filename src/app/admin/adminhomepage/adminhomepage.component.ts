import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.scss']
})
export class AdminhomepageComponent {
  income:any 
  expense:any
  balance:any
  apartment:any
  complaint:any
  event:any
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}

  dashviewForm=this.fb.group({
    
    income:[''],
    expense:[''],
    balance:[''],
    apartment:[''],
    complaint:[''],
    event:['']
  })
  ngOnInit():void{  
 
    this.backendservice.getAccountsData().subscribe((res)=>{
      this.backendservice.getincomeData().subscribe((res2)=>{
      let totalincome=0;let totalExp=0;let balance=0; 
      for(let i=0;i<res.length;i++){
          totalExp=totalExp+Number(res[i].paymentamt)
        }
        for(let i=0;i<res2.length;i++){
          totalincome=totalincome+Number(res2[i].paymentamt)
        }
        this.income=totalincome.toString()
        this.expense=totalExp.toString()
        this.balance=this.income-this.expense
      })
    })
    this.backendservice.getApartmentdata().subscribe((res3)=>{
      this.apartment=res3.length;
    })
    this.backendservice.getComplaintData().subscribe((res4)=>{
      let count=0;
      for(let i=0;i<res4.length;i++){
        if(res4[i].status=='Registered')
        {
          count=count+1;
        }
      }
      this.complaint=count;
    })
    this.backendservice.getEventData().subscribe((res4)=>{
      let count=0;
      for(let i=0;i<res4.length;i++){
        if(res4[i].status=='Request')
        {
          count=count+1;
        }
      }
      this.event=count;
    })
  
  }
}
