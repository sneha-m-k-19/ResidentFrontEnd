import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent {
Dataarray:any[]=[];
constructor(private backendservice:ResBackEndServiceService){}
ngOnInit():void{
  this.backendservice.getComplaintData().subscribe((res)=>{
    this.Dataarray=res;
  })
}
}
