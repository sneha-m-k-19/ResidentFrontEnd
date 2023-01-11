import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-apartment-view',
  templateUrl: './apartment-view.component.html',
  styleUrls: ['./apartment-view.component.scss']
})
export class ApartmentViewComponent {
  Dataarray:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getApartmentdata().subscribe((res)=>{
      this.Dataarray=res;
    })
  }
}
