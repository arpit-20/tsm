import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../services/customer/customer-service.service';
import { AlertService } from '../services/alert/alert-service.service';

@Component({
  selector: 'app-serviceorder',
  templateUrl: './serviceorder.component.html',
  styleUrls: ['./serviceorder.component.css']
})
export class ServiceorderComponent implements OnInit {
  orderForm: any;
  loading = false;
  submitted = false;
  returnUrl: string |any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cusomerService: CustomerServiceService,
    private alertService: AlertService
) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile_number: ['', Validators.required],
      shocker_brand: ['', Validators.required],
      number_of_pairs: ['', Validators.required],
      type_of_service: ['', Validators.required],
      problems_facing: ['', Validators.required]
    });
  }
  get f() { return this.orderForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.orderForm.invalid) {
          return;
      }else{

        this.cusomerService.postCustomerData(this.orderForm.value).subscribe((res)=>{
          this.orderForm.reset();
          this.submitted=false;
        },(err)=>{
          this.alertService.error("Error! please try again")
        })
      }

      this.loading = true;
      

}

}
