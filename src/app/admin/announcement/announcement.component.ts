import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  AnouncementForm=this.fb.group({
    date:[''],
    Title:[''],
    Subject:['']
  
  })
  OnSubmit(){
    console.log(this.AnouncementForm.value)
    this.backendservice.insertAnnouncementdata(this.AnouncementForm.value)
  }
  ngOnInit():void{
    
  }
}
