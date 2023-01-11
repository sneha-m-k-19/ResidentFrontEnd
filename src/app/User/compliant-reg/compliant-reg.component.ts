import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-compliant-reg',
  templateUrl: './compliant-reg.component.html',
  styleUrls: ['./compliant-reg.component.scss']
})
export class CompliantRegComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  complaintRegForm=this.fb.group({
    UserName:localStorage.getItem('username'),
    ApartmentNumber:localStorage.getItem('aptNumber'),
    ComplaintSubject:[''],
    Complaints:[''],
    status:'Registered',
  
  })
  OnSubmit(){
    console.log(this.complaintRegForm.value)
    this.backendservice.insertcomplaintdata(this.complaintRegForm.value)

  }
  ngOnInit():void{
    
  }
}
