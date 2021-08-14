import { SuperAdminService } from './../../services/super-admin/super-admin.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert-service.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  adminList: any[] | undefined;
  constructor(private superAdminService: SuperAdminService,
    private adminService:AdminService,private alertService: AlertService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAdminData();
  }


  getAdminData(){
  this.superAdminService.getAdmin().subscribe(adminData=>{
    this.adminList=adminData;
  },err=>{

  })
  }

  deleteAdmin(data:any){
    var id=data?._id;
    this.adminService.deleteAdmin(id).subscribe((res)=>{
      this.alertService.success("Record has been deleted successfully!");
      this.getAdminData();
    },(err)=>{
      this.alertService.error("Error! please try again");
    })
  }


  updateAdmin(data:any){

    this.router.navigate(["/admin-dashboard/create"])
    // this.adminService.updateAdmin.next(data);
    sessionStorage.setItem("admin",JSON.stringify(data))
  }

}
