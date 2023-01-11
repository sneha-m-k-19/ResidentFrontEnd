import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResBackEndServiceService {

  constructor(private http: HttpClient) { }
  GetWeatherData() {
    return this.http.get<any>('https://localhost:7168/WeatherForecast')
  }

  //insert apartment details
  insertapartmentdata(data: any) {

    this.http.post("https://localhost:7168/api/Apartmenet/InsertApartment", data).toPromise().then(result => { alert(" Registerd Successfully ") ,window.location.href='/adminhome/apartmentView'})

  }
  insertcomplaintdata(data: any) {

    this.http.post("https://localhost:7168/api/Complaint/InsertComplaint", data).toPromise().then(result => { alert("Complaint Registerd Successfully ") })

  }
  login(loginInfo: Array<string>) {
    return this.http.post("https://localhost:7168/api/Login/LoginUser", {
      userName: loginInfo[0],
      password: loginInfo[1],
    },
      {
        responseType: 'text',
      });
  }
  inserteventdata(data: any) {

    this.http.post("https://localhost:7168/api/Event/insertEvent", data).toPromise().then(result => { alert("Event Requested Successfully ") })

  }

  insertfamilydata(data: any) {

    this.http.post("https://localhost:7168/api/Family/insertFamily", data).toPromise().then(result => { alert("Member registerd Successfully "),window.location.href='/userhome/familyDetails' })

  }
  getComplaintData()
  {
    return this.http.get<any>('https://localhost:7168/api/Complaint/ViewComplaint/' );
  }
  getComplaintDatabyid(id:any)
  {
    return this.http.get<any>('https://localhost:7168/api/Complaint/ApproveComplaint/'+id)
  }
  UpdateComplaintdata(data: any) {

    this.http.post("https://localhost:7168/api/Complaint/UpdateComplaint", data).toPromise().then(result => { alert("Update Status Successfully ") ,window.location.href='/adminhome/complaint'})

  }
  getEventData()
  {
    return this.http.get<any>('https://localhost:7168/api/Event/ViewEvent')
  }
  getEventDatabyid(id:any)
  {
    return this.http.get<any>('https://localhost:7168/api/Event/ApproveEvent/'+id)
  }
  UpdateEventdata(data: any) {

    this.http.post("https://localhost:7168/api/Event/UpdateEvent", data).toPromise().then(result => { alert("Update Status Successfully ") ,window.location.href='/adminhome/events'})

  }
  insertAnnouncementdata(data: any) {

    this.http.post("https://localhost:7168/api/Announcement/insertAnnouncement", data).toPromise().then(result => { alert("Announcement registerd Successfully ") })

  }
  getNoticeData()
  {
    return this.http.get<any>('https://localhost:7168/api/Announcement/ViewAnnouncement')
  }
  GetUserdata(data: string) {

    return this.http.get("https://localhost:7168/api/Apartmenet/GetUser?Username="+data)

  }
 /* getComplaintbyid(data:any)
  {
    return this.http.get<any>('https://localhost:7168/api/Complaint/ApproveComplaint/'+data)
  }*/
  insertPaymentdata(data: any) {

    this.http.post("https://localhost:7168/api/Payment/insertPayment", data).toPromise().then(result => { alert("Payment Successfully ") })

  }
  
  insertDeductiondata(data: any) {

    this.http.post("https://localhost:7168/api/Expense/insertExpense", data).toPromise().then(result => { alert("Successfully Added") })

  }
  getAccountsData()
  {
    return this.http.get<any>('https://localhost:7168/api/Expense/ViewAccounts')
  }
  getincomeData()
  {
    return this.http.get<any>('https://localhost:7168/api/Payment/ViewAccounts')
  }
  getFamilyData()
  {
    return this.http.get<any>('https://localhost:7168/api/Family/ViewFamily')
  }
  getApartmentdata()
  {
    return this.http.get<any>('https://localhost:7168/api/Apartmenet/ViewApartment')
  }
  getapartmentFamilyData()
  {
    return this.http.get<any>('https://localhost:7168/api/Family/ViewFamily')
  }
}
