import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.scss']
})
export class EventRegComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  EventRegForm=this.fb.group({
    UserName:localStorage.getItem('username'),
    ApartmentNumber:localStorage.getItem('aptNumber'),
    Event:[''],
    EventDetails:[''],
    date:[''],
    status:'Request',
  })
  OnSubmit(){
    //console.log(this.EventRegForm.value)
    this.backendservice.inserteventdata(this.EventRegForm.value)
  }
  ngOnInit():void{  
  }
}
