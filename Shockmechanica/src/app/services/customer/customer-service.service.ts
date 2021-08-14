import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:7200/";

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
