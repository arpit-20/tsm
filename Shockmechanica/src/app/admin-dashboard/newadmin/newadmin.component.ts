import { AdminService } from './../../services/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert-service.service';

@Component({
  selector: 'app-newadmin',
  templateUrl: './newadmin.component.html',
  styleUrls: ['./newadmin.component.css']
})
export class NewadminComponent implements OnInit {
  createadminForm: any ;
  loading = false;
  submitted = false;
  setData: boolean=false;
  adminData: any;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService, private alertService: AlertService) { }

  ngOnInit(): void {
   
    this.createadminForm = new FormGroup({
      "first_name": new FormControl(null, [Validators.required]),
      "last_name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required]),
      "dob": new FormControl(null, [Validators.required]),
      "gender": new FormControl("male", [Validators.required]),
      "password": new FormControl(null, [Validators.required])
  });

  let admindata=sessionStorage.getItem("admin")

  if(admindata!=null || admindata !=undefined){
    
      this.setData=true;
      this.adminData=JSON.parse(admindata);
      this.createadminForm.setValue({
    "first_name": this.adminData.first_name,
    "last_name": this.adminData.last_name,
    "email": this.adminData.email,
    "dob": this.adminData.dob,
    "gender": this.adminData.gender,
    "password": this.adminData.password
      });
    }
  
  }
  get f() { return this.createadminForm.controls; }

  onSubmit(form: FormGroup) {

    this.submitted = true;

    if(this.setData==true){


      // stop here if form is invalid
      if (this.createadminForm.invalid) {
        return;
    }else{
      this.adminService.updateAdminData(form.value,this.adminData._id).subscribe((res)=>{
        this.alertService.success("Record has been updated successfully!");
        sessionStorage.removeItem("admin");
        this.createadminForm.reset();
        this.submitted=false;
      },(err)=>{
        this.alertService.error("Error! Record is not updated");
      })
    }

    }else{

      // stop here if form is invalid
      if (this.createadminForm.invalid) {
        return;
    }else{

    this.adminService.createAdmin(form.value).subscribe(data=>{
      this.createadminForm.reset();
      this.submitted=false;

    })
    }

   
      this.loading = true;
    }
      
  }

}
