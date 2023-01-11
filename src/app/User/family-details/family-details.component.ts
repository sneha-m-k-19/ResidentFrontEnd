import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.scss']
})
export class FamilyDetailsComponent {
  Dataarray:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getFamilyData().subscribe((res)=>{
      //this.Dataarray=res
      console.log(res)
      for(let i=0;i<res.length;i++){
        if(res[i].apartmentNumber==localStorage.getItem('aptNumber')){
          this.Dataarray.push(res[i])
        }
      }
    })
  }
}
