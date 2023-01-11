import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-event-approval',
  templateUrl: './event-approval.component.html',
  styleUrls: ['./event-approval.component.scss']
})
export class EventApprovalComponent {
  Dataarray:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getEventData().subscribe((res)=>{
      this.Dataarray=res;
    })
  }
}
