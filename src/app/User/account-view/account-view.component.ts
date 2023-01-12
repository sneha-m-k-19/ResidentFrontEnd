import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent {
  Dataarray:any[]=[];
  Dataarray2:any[]=[];
  income:any;
  expense:any;
  balance:any;
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  AccountsviewForm=this.fb.group({
    Totalincome:[''],
    Totalexpense:[''],
    balance:[''],
    
  })
  ngOnInit():void{
    this.backendservice.getAccountsData().subscribe((res)=>{
      this.Dataarray=res;
      this.backendservice.getincomeData().subscribe((res2)=>{
      this.Dataarray2=res2;
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
  }
}
