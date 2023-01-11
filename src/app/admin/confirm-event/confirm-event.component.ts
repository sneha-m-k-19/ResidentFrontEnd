import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-confirm-event',
  templateUrl: './confirm-event.component.html',
  styleUrls: ['./confirm-event.component.scss']
})
export class ConfirmEventComponent implements OnInit{id:any;
  public EventArray:any;
  ApproveForm:FormGroup;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private backendservice:ResBackEndServiceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id')
    })
    this.ApproveForm=this.fb.group({
      id:[''],
      UserName:[''],
      ApartmentNumber:[''],
      Event:[''],
      EventDetails:[''],
      date:[''],
      Status:[''],
    })
  }
  ngOnInit(): void {
    this.backendservice.getEventDatabyid(this.id).subscribe((data:any)=>
    {
      this.EventArray=data;
      this.ApproveForm.setValue({
      id:data.id,
      UserName:data.userName,
      ApartmentNumber:data.apartmentNumber,
      Event:data.event,
      date:data.date,
      EventDetails:data.eventDetails,
      Status:data.status,
      });
    });
  }
  onSubmit(){
    this.backendservice.UpdateEventdata(this.ApproveForm.value)
  }

}
