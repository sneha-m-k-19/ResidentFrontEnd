import { Component } from '@angular/core';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent {
  Dataarray:any[]=[];
  Dataarray2:any[]=[];
  constructor(private backendservice:ResBackEndServiceService){}
  ngOnInit():void{
    this.backendservice.getAccountsData().subscribe((res)=>{
      this.Dataarray=res;
      this.backendservice.getincomeData().subscribe((res)=>{
      this.Dataarray2=res;
    })
  })
  }
}
