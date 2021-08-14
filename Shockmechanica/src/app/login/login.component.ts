import { AdminService } from './../services/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../services/alert/alert-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: string |any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,private alertService: AlertService,
    private router: Router) { }
  userLogin(){
  
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null, [Validators.required])
  });
  }
  get f() { return this.loginForm.controls; }
  login(form: FormGroup) {
    this.submitted = true;
    if(form.invalid){

      this.alertService.error("LoggedIn -error");
      return
    }else{
      this.adminService.adminLogin(form.value).subscribe(data=>{
        this.alertService.success("LoggedIn Successfully");
        sessionStorage.setItem("token",JSON.stringify(data.res.token));
        let admin=data.res.admin
        sessionStorage.setItem("adminData", JSON.stringify(admin));
      
    
        this.router.navigateByUrl('admin-dashboard/orders')
   
      },err=>{
       this.alertService.error("Something is wrong with the credentials,please try again!")
      })
   
     
    }

    this.loading = true;

  }
}
