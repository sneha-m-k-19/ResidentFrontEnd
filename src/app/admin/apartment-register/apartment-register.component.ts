import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-apartment-register',
  templateUrl: './apartment-register.component.html',
  styleUrls: ['./apartment-register.component.scss']
})
export class ApartmentRegisterComponent {
constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
ApartmentRegForm=this.fb.group({
  FirstName:[''],
  LastName:[''],
  PhoneNumber:[''],
  ApartmentNumber:[''],
  ApartmentName:[''],
  UserName:[''],
  Password:[''],

})
OnSubmit(){
  //console.log(this.ApartmentRegForm.value)
  this.backendservice.insertapartmentdata(this.ApartmentRegForm.value)
  
}
ngOnInit():void{
  
}
}
