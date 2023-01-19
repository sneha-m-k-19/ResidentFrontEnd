import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AnnouncementComponent } from './admin/announcement/announcement.component';
import { ApartmentFamilyViewComponent } from './admin/apartment-family-view/apartment-family-view.component';
import { ApartmentRegisterComponent } from './admin/apartment-register/apartment-register.component';
import { ApartmentViewComponent } from './admin/apartment-view/apartment-view.component';
import { ApproveComplaintComponent } from './admin/approve-complaint/approve-complaint.component';
import { ComplaintComponent } from './admin/complaint/complaint.component';
import { ConfirmEventComponent } from './admin/confirm-event/confirm-event.component';
import { DeductionComponent } from './admin/deduction/deduction.component';
import { EventApprovalComponent } from './admin/event-approval/event-approval.component';
import { AuthenticationfilterGuard } from './authenticationfilter.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AccountViewComponent } from './User/account-view/account-view.component';
import { ComplaintStatusComponent } from './User/complaint-status/complaint-status.component';
import { CompliantRegComponent } from './User/compliant-reg/compliant-reg.component';
import { EventRegComponent } from './User/event-reg/event-reg.component';
import { EventViewComponent } from './User/event-view/event-view.component';
import { FamilyDetailsComponent } from './User/family-details/family-details.component';
import { FamilyRegComponent } from './User/family-reg/family-reg.component';
import { NoticeViewComponent } from './User/notice-view/notice-view.component';
import { PaymentComponent } from './User/payment/payment.component';
import { UserHomePageComponent } from './User/user-home-page/user-home-page.component';

import { UserhomeComponent } from "./User/userhome/userhome.component";
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';

const routes: Routes = [{path:'ViewData',component:ViewweatherdataComponent},
{path:'Home',component:HomeComponent,
  children:[{path:'HomePage',component:HomepageComponent},
  {path:'About',component:AboutComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'Login',component:LoginComponent},
  {path:'Panel-Members',component:PanelComponent},]},
  {path:'',redirectTo:'/Home/Login',pathMatch:'full'},

 
{path:'adminhome',component:AdminhomeComponent,canActivate:[AuthenticationfilterGuard],
children:[{path:'AdminHomePg',component:AdminhomepageComponent},
{path:'adminpanel',component:AdminpanelComponent},
{path:'AdminPayment',component:DeductionComponent},
{path:'accounts',component:AccountsComponent},
{path:'announcment',component:AnnouncementComponent},
{path:'complaint',component:ComplaintComponent},
{path:'apartmentRegister',component:ApartmentRegisterComponent},
{path:'apartmentView',component:ApartmentViewComponent},
{path:'familyView',component:ApartmentFamilyViewComponent},
{path:'events',component:EventApprovalComponent},
{path:'approveevents/:id',component:ConfirmEventComponent},
{path:'approvecomplaint/:id',component:ApproveComplaintComponent}

]
},

{path:'userhome',component:UserhomeComponent,canActivate:[AuthenticationfilterGuard],
children:[{path:'UHome',component:UserHomePageComponent},
{path:'accountsview',component:AccountViewComponent},
{path:'payment',component:PaymentComponent},
{path:'complaintreg',component:CompliantRegComponent},
{path:'complaintstatus',component:ComplaintStatusComponent},
{path:'familyreg',component:FamilyRegComponent},
{path:'noticeview',component:NoticeViewComponent},
{path:'eventreg',component:EventRegComponent},
{path:'eventstatus',component:EventViewComponent},
{path:'familyDetails',component:FamilyDetailsComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
