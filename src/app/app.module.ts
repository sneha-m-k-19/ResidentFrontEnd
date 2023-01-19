import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ApartmentRegisterComponent } from './admin/apartment-register/apartment-register.component';
import { ComplaintComponent } from './admin/complaint/complaint.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { AnnouncementComponent } from './admin/announcement/announcement.component';
import { EventApprovalComponent } from './admin/event-approval/event-approval.component';
import { UserhomeComponent } from './User/userhome/userhome.component';
import { FamilyRegComponent } from './User/family-reg/family-reg.component';
import { CompliantRegComponent } from './User/compliant-reg/compliant-reg.component';
import { NoticeViewComponent } from './User/notice-view/notice-view.component';
import { AccountViewComponent } from './User/account-view/account-view.component';
import { EventRegComponent } from './User/event-reg/event-reg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminhomepageComponent } from './admin/adminhomepage/adminhomepage.component';
import { ApproveComplaintComponent } from './admin/approve-complaint/approve-complaint.component';
import { ComplaintStatusComponent } from './User/complaint-status/complaint-status.component';
import { ConfirmEventComponent } from './admin/confirm-event/confirm-event.component';
import { PaymentComponent } from './User/payment/payment.component';
import { DeductionComponent } from './admin/deduction/deduction.component';
import { UserHomePageComponent } from './User/user-home-page/user-home-page.component';
import { EventViewComponent } from './User/event-view/event-view.component';
import { FamilyDetailsComponent } from './User/family-details/family-details.component';
import { ApartmentViewComponent } from './admin/apartment-view/apartment-view.component';
import { ApartmentFamilyViewComponent } from './admin/apartment-family-view/apartment-family-view.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewweatherdataComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    AdminhomeComponent,
    ApartmentRegisterComponent,
    ComplaintComponent,
    AccountsComponent,
    AnnouncementComponent,
    EventApprovalComponent,
    UserhomeComponent,
    FamilyRegComponent,
    CompliantRegComponent,
    NoticeViewComponent,
    AccountViewComponent,
    EventRegComponent,
    HomepageComponent,
    AdminhomepageComponent,
    ApproveComplaintComponent,
    ComplaintStatusComponent,
    ConfirmEventComponent,
    PaymentComponent,
    DeductionComponent,
    UserHomePageComponent,
    EventViewComponent,
    FamilyDetailsComponent,
    ApartmentViewComponent,
    ApartmentFamilyViewComponent,
    AdminpanelComponent,
    PanelComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
