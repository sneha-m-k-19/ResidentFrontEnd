import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-family-reg',
  templateUrl: './family-reg.component.html',
  styleUrls: ['./family-reg.component.scss']
})
export class FamilyRegComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  FamRegForm=this.fb.group({
    FirstName:[''],
    LastName:[''],
    phoneNumber:[''],
    dob:[''],
    Email:[''],
    inlineRadioOptions:[''],
    Occupation:[''],
    ApartmentNumber:localStorage.getItem('aptNumber'),
    ApartmentName:localStorage.getItem('aptName'),
    })
  OnSubmit(){
    console.log(this.FamRegForm.value)
    this.backendservice.insertfamilydata(this.FamRegForm.value)
  }
  ngOnInit():void{
    
  }
}
