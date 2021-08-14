import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isAdminLoggedIn: boolean = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  redirectToLogin(){
  this.route.navigateByUrl('/login');
  }
  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl(''); 
  }
  isLoggedIn() {
    if(sessionStorage.getItem("token")){
      return true;
    }
    return false;
  }

}
