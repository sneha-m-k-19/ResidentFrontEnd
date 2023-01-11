import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent {
  Dataarray:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getEventData().subscribe((res)=>{
      //this.Dataarray=res;
      for(let i=0;i<res.length;i++){
        if(res[i].userName==localStorage.getItem('username')){
          this.Dataarray.push(res[i])
        }
      }
    })
  }
}
