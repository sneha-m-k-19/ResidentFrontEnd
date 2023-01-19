import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from '../res-back-end-service.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  Dataarray:any[]=[];
   president:any;
  secretary:any;
  treasurer:any;

constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}

panelviewForm=this.fb.group({
  
  President:[''],
  Secretary:[''],
  Treasurer:[''],
  
})
ngOnInit():void{  
 
  this.backendservice.getPanelData().subscribe((res)=>{
 // let totalincome=0;let totalExp=0;let balance=0; 
  for(let i=0;i<res.length;i++){
    console.log(res)
      this.president=res[i].president;
      this.secretary=res[i].secretary;
      this.treasurer=res[i].treasurer;
    }
    
    
  })

}
}