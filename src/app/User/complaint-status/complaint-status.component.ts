import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-complaint-status',
  templateUrl: './complaint-status.component.html',
  styleUrls: ['./complaint-status.component.scss']
})
export class ComplaintStatusComponent {
  Dataarray:any[]=[];
  //res:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getComplaintData().subscribe((res)=>{
      //this.res = res;
      //console.log(res);
      for(let i=0;i<res.length;i++){
        if(res[i].userName==localStorage.getItem('username')){
          this.Dataarray.push(res[i])
        }
      }
    })
   
  }
}
