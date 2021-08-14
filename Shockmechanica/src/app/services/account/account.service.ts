import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  isLoggedIn(){
    if(sessionStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
