import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-apartment-family-view',
  templateUrl: './apartment-family-view.component.html',
  styleUrls: ['./apartment-family-view.component.scss']
})
export class ApartmentFamilyViewComponent {
  Dataarray:any[]=[];
  constructor(private fb:FormBuilder,private backendservice:ResBackEndServiceService){}
  FamilyviewForm=this.fb.group({
    ApartmentNumber:[''],
  })
ngOnInit():void{
  
}
  OnSubmit(){
    this.backendservice.getapartmentFamilyData().subscribe((res)=>{
      this.Dataarray=[];
      for(let i=0;i<res.length;i++){
        if(res[i].apartmentNumber==this.FamilyviewForm.value.ApartmentNumber){
       //console.log(this.FamilyviewForm.value.ApartmentNumber)
          this.Dataarray.push(res[i])
        }
      }
     // this.Dataarray=res;
    })
     
  }
}

