import { Component } from '@angular/core';
import { ResBackEndServiceService } from '../res-back-end-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  Dataarray:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getNoticeData().subscribe((res)=>{
    this.Dataarray=res;
    //console.log(this.Dataarray);
    //localStorage.setItem('sessionid',"")      
    })
  }
}
