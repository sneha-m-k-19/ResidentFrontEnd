import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResBackEndServiceService } from '../res-back-end-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public Loginstatus = false;
  type: string = "Password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  isUserValid: boolean = false;
  viewservice: any;

  constructor(private fb: FormBuilder, private router: Router, private service: ResBackEndServiceService) { }
  ngOnInit(): void {
    localStorage.setItem('username',"")
    localStorage.setItem('aptNumber',"")
      localStorage.setItem('aptName',"")
    //let apartmentNumber=localStorage.getItem("ApartmentNumber")
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  OnSubmit() {
    if (this.loginForm.value.username == 'Admin' && this.loginForm.value.password == 'Admin') {
      this.router.navigate(['adminhome/AdminHomePg'])
      localStorage.setItem('username','Admin')
      localStorage.setItem('aptNumber',"")
      localStorage.setItem('aptName',"")
    }
    else {
      this.service.login([this.loginForm.value.username, this.loginForm.value.password]).subscribe((res: string) => {
        
        console.log(res);
        console.log(this.loginForm.value.username)
        if (res == 'Failure') {
          this.isUserValid = false;
          alert('Login Unsuccessful');
        } else {
          //adding session 
          this.service.GetUserdata(this.loginForm.value.username).subscribe((res: any) => {
            console.log(res);
            this.router.navigate(['userhome/UHome'])
            //localStorage.setItem("sessionid","valid");
            localStorage.setItem('aptName',res.apartmentName)
            localStorage.setItem('aptNumber',res.apartmentNumber)
            localStorage.setItem('username',res.userName)
          })
          this.isUserValid = true;
          //this.router.navigate(['userhome/UHome'])
          
        }
      })
    }
  }
}

