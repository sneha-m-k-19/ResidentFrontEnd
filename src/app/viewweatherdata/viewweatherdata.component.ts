import { Component } from '@angular/core';
import { ResBackEndServiceService } from '../res-back-end-service.service';

@Component({
  selector: 'app-viewweatherdata',
  templateUrl: './viewweatherdata.component.html',
  styleUrls: ['./viewweatherdata.component.scss']
})
export class ViewweatherdataComponent {
constructor(private backendservice:ResBackEndServiceService){}
ViewDataArray:any[]=[];
ngOnInit()
{
  this.backendservice.GetWeatherData().subscribe((res)=>{
    this.ViewDataArray=res;
  })
}
}
