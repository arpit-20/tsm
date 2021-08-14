import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 public isSuperAdminLoggedIn: boolean = true;
  // user: Object | undefined;
  userData: any;
  user: any;
  adminData: any;
  constructor() { }

  ngOnInit(): void {
    
  this.user=sessionStorage.getItem("adminData");
    
  this.adminData=JSON.parse(this.user);


  }


  // deleteAdmin(admin){
  //   this.SuperAdminService.deleteAdmin(admin?._id).subscribe(res=>{

  //   },err=>{

  //   })
  // }

  // updateAdmin(admin){
  //   this.SuperAdminService.deleteAdmin(admin?._id).subscribe(res=>{

  //   },err=>{

  //   })
  // }


}
