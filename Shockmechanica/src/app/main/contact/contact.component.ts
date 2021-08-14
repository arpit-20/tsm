import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert-service.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isContactFormLoaded: boolean = false;
  contactForm: any;
  loading = false;
  submitted:boolean = false;
 
  constructor(
    private customerService:CustomerServiceService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({

    contact_form: new FormControl(true),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        mobile_number:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
        other_requirement: new FormControl(null, Validators.required)
      });
  }
  get f() { return this.contactForm.controls; }

  openContactForm(){
    this.submitted = false;
 this.isContactFormLoaded = true;
  }

  onSubmit(form: FormGroup) {

    this.submitted = true; 
      // stop here if form is invalid
      if (this.contactForm.invalid) {
        return;
    }else{
    this.customerService.postCustomerData(form.value).subscribe(data=>{
      this.alertService.success("Order has been placed successfully!")
      this.contactForm.reset();
      this.submitted=false;
    },err=>{
      this.alertService.error("Error! please try again")
    })
    }
      this.loading = true;
      
  }
  onReset(){
    this.isContactFormLoaded = false;
    this.contactForm.reset();
  }

}
