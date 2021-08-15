import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as env from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  private url = env.environment.apiUrl;

  postCustomerData(data: any): Observable<any>{
    return this.http.post(this.url+"customer/", data);
  }
  public getCustmerData(id?:any): Observable<any>{
    if(id){
    return this.http.get(this.url+"customer/"+id);
    }else{

    return this.http.get(this.url+"customer/");
    }
  }

  public deleteCustomerData(id:any): Observable<any>{
    return this.http.delete(this.url+"customer/"+id); 
}






  
}
