import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResBackEndServiceService } from 'src/app/res-back-end-service.service';

@Component({
  selector: 'app-approve-complaint',
  templateUrl: './approve-complaint.component.html',
  styleUrls: ['./approve-complaint.component.scss']
})
export class ApproveComplaintComponent implements OnInit{id:any;
  public ComplaintArray:any;
  ApproveForm:FormGroup;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private backendservice:ResBackEndServiceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('id')
    })
    this.ApproveForm=this.fb.group({
      id:[''],
      UserName:[''],
      ApartmentNumber:[''],
      ComplaintSubject:[''],
      Complaints:[''],
      Status:[''],
    })
  }
  ngOnInit(): void {
    this.backendservice.getComplaintDatabyid(this.id).subscribe((data:any)=>
    {
      this.ComplaintArray=data;
      this.ApproveForm.setValue({
        id:data.id,
      UserName:data.userName,
      ApartmentNumber:data.apartmentNumber,
      ComplaintSubject:data.complaintSubject,
      Complaints:data.complaints,
      Status:data.status,
      });
    });
  }
  onSubmit(){
    this.backendservice.UpdateComplaintdata(this.ApproveForm.value)
  }

}
