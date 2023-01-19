import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { window } from 'rxjs';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent {
  Dataarray:any[]=[];
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  PanelForm=this.fb.group({
    date:[''],
    President:[''],
    Secretary:[''],
    Treasurer:['']
  
  })
  OnSubmit(){
    console.log(this.PanelForm.value)
    this.backendservice.insertPaneldata(this.PanelForm.value)
    
  }
  ngOnInit():void{
    this.backendservice.getPanelData().subscribe((res)=>{
      this.Dataarray=res;
    })
  }
}
