import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.scss']
})
export class DeductionComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  DeductionForm=this.fb.group({
  paymentamt:[''],
  event:[''],
  date:[''],
  })
  OnSubmit(){
  console.log(this.DeductionForm.value)
  this.backendservice.insertDeductiondata(this.DeductionForm.value)
}
ngOnInit():void{
  
}
}
