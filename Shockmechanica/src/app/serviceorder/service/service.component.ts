import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert-service.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  serviceForm: any;
  loading = false;
  submitted:boolean = false;
  returnUrl: string |any;
  constructor(
    private cusomerService: CustomerServiceService,
   private alertService: AlertService
) {
}

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
    service_form: new FormControl(true),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null,Validators.required),
      mobile_number: new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      shocker_brand: new FormControl(null, Validators.required),
      team_name:new FormControl(null, Validators.required),
      number_of_pairs: new FormControl(null,[Validators.required, Validators.min(1),Validators.max(10)]),
      type_of_service: new FormControl(null, Validators.required),
      problems_facing: new FormControl(null, Validators.required)
    });
  }
  get f() { return this.serviceForm.controls; }

  onSubmit(form:FormGroup) {
 
    this.submitted = true;

      // stop here if form is invalid
      if (this.serviceForm.invalid) {
          return;
      }else{
        this.cusomerService.postCustomerData(form.value).subscribe((res)=>{
          this.alertService.success("Order has been placed successfully!")
          this.serviceForm.reset();
          this.submitted=false;
        },(err)=>{
          this.alertService.success("Error! please try again")
        })
      }

      this.loading = true;
      

}

}
