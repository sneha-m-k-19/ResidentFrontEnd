import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  Dataarray:any[]=[];
  Dataarray2:any[]=[];
// Dataarray:any[]=[];
  income:any;
  expense:any;
  balance:any
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  AccountsviewForm=this.fb.group({
    FromDate:[''],
   // ToDate:[''],
    Totalincome:[''],
    Totalexpense:[''],
    balance:[''],
    
  })

 // constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{  
      income: ;
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
    
  }
  
  OnSubmit(){
    this.Dataarray=[];
    this.Dataarray2=[];
    this.backendservice.getAccountsData().subscribe((res)=>{
      this.backendservice.getincomeData().subscribe((res2)=>{
      
            
      for(let i=0;i<res.length;i++){
        if(res[i].date==this.AccountsviewForm.value.FromDate){
          this.Dataarray.push(res[i])  
         // totalExp=totalExp+Number(res[i].paymentamt)
        }
      }
        for(let i=0;i<res2.length;i++){
          if(res2[i].date==this.AccountsviewForm.value.FromDate){
        
            this.Dataarray2.push(res2[i])
           // totalincome=totalincome+Number(res2[i].paymentamt)
          }
      }
     
    })
  })
  }
}
