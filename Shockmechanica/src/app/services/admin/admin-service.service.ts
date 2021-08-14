import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public updateAdmin= new Subject<any>();

 private url = "http://localhost:7200/"
  constructor(private http: HttpClient) { }

  public adminLogin(data: any): Observable<any>{
    return this.http.post(this.url+"user/login", data);
  }

  public createAdmin(data: any): Observable<any>{
    return this.http.post(this.url+"user/register", data);
  }


  public deleteAdmin(id:any): Observable<any>{
    return this.http.delete(this.url+"user/"+id);
  }

  public updateAdminData(data: any,id:any): Observable<any>{
    return this.http.patch(this.url+"user/" +id, data);
  }




}
